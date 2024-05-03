import { CLIOptions, Inquirerer, Question } from 'inquirerer'
import { ParsedArgs } from 'minimist';

import { commands as codegen } from './codegen';
import { commands as protogen } from './protogen';

import { help as codegenHelp } from './codegen/cli';
import { help as protogenHelp } from './protogen/cli';

export const commands = async (argv: Partial<ParsedArgs>, prompter: Inquirerer, _options: CLIOptions) => {
  let command;

  if (argv._.length > 0) {
    command = argv._.shift();
  }

  if (command) {
    argv.command = command;
  }

  if (argv.help || argv.h) {
    codegenHelp();
    protogenHelp();
    process.exit(0);
  }


  const questions: Question[] = [
    {
      type: 'autocomplete',
      name: 'command',
      message: 'choose a command',
      options: [
        'protogen',
        'codegen'
      ]
    }
  ];

  ({ command } = await prompter.prompt(argv, questions));

  // recursive... 
  delete argv.command;

  // @ts-ignore
  prompter.exit = () => {};

  switch (command) {
    case 'protogen':
        argv = await protogen(argv, prompter, _options);
        break;

    case 'codegen':
        argv = await codegen(argv, prompter, _options);
        break;

    default:
      console.log(`No recognized command provided or no command given: ${command}`);
      break;
  }

  return argv;

};