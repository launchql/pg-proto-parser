import { Type, Enum } from '@launchql/protobufjs';
import * as t from '@babel/types';
import { PgProtoParserOptions } from './types';
export declare const getTSType: (type?: string) => t.TSBigIntKeyword | t.TSBooleanKeyword | t.TSNumberKeyword | t.TSStringKeyword | t.TSTypeReference;
export declare const isPrimitiveType: (type: string) => boolean;
export declare const resolveTypeName: (type: string) => t.TSBigIntKeyword | t.TSBooleanKeyword | t.TSNumberKeyword | t.TSStringKeyword | t.TSTypeReference;
export declare const generateTSInterfaces: (types: Type[], options: PgProtoParserOptions) => string;
export declare const generateTSEnums: (enums: Enum[]) => string;
export declare const generateTSEnumsTypeUnionAST: (enums: Enum[]) => string;
export declare const generateTSEnumFunction: (enums: Enum[]) => string;
export declare const generateTSASTHelperMethods: (types: Type[]) => string;
export declare const generateTSASTHelpersImports: (types: Type[], options: PgProtoParserOptions) => string;
export declare const transformEnumToAST: (enumData: any) => t.ExportNamedDeclaration;
export declare const generateImportSpecifiersAST: (types: Type[], options: PgProtoParserOptions) => t.ImportDeclaration;
export declare const generateMacroForTypes: () => t.ExportNamedDeclaration;
export declare const generateAstHelperMethodsAST: (types: Type[]) => t.ExportDefaultDeclaration;
export declare const createUnionTypeAST: (types: Type[]) => t.ExportNamedDeclaration;
export declare const transformTypeToAST: (type: Type, options: PgProtoParserOptions) => t.ExportNamedDeclaration;
export declare const transformEnumToTypeUnionAST: (enumData: Enum) => t.ExportNamedDeclaration;
export declare const buildEnumValueFunctionAST: (enumData: Enum[]) => t.ExportNamedDeclaration[];
