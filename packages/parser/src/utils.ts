import { Enum, Field, ReflectionObject } from '@launchql/protobufjs';
import pkg from '../package.json';
import { PgProtoParserOptions } from './types';
import { writeFileSync } from 'fs';
import { extname } from 'path';

export const getUndefinedKey = (enumName) => {
  // Split the name into parts where a lowercase letter is followed by an uppercase letter
  const parts = enumName.split(/(?<=[a-z])(?=[A-Z])/);

  const processedParts = parts.map(part => {
    // For parts that are all uppercase and longer than 1 character, only the first character should remain uppercase
    if (part === part.toUpperCase() && part.length > 1) {
      return part.charAt(0) + part.slice(1).toLowerCase();
    }
    return part;
  });

  const upperSnakeCase = processedParts.join('_').toUpperCase();

  return `${upperSnakeCase}_UNDEFINED`;
}


export const hasUndefinedInitialValue = (enumData: Enum) => {
  const entries = Object.entries(enumData.values);
  if (entries.length === 0) return false;

  const undefinedKey = getUndefinedKey(enumData.name);
  const firstEntry = entries[0];
  return firstEntry[0] === undefinedKey && firstEntry[1] === 0;
}

export const cloneAndNameNode = (node: ReflectionObject, name: string) => {
  const clone = JSON.parse(JSON.stringify(node));
  return {
    name,
    ...clone
  }
}

export const getFieldName = (field: Field, fallbackName: string) => {
 return field.options?.json_name ? field.options.json_name : fallbackName;
}

export const getHeader = () => (`/**
* This file was automatically generated by pg-proto-parser@${pkg.version}.
* DO NOT MODIFY IT BY HAND. Instead, modify the source proto file,
* and run the pg-proto-parser generate command to regenerate this file.
*/
`);

export const writeFileToDisk = (path: string, contents: string, options: PgProtoParserOptions) => {
  const c = (options.includeHeader && extname(path) === '.ts') ? `${getHeader()}${contents}` : contents;
  writeFileSync(path, c);
}