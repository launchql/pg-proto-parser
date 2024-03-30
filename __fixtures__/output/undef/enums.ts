/**
* This file was automatically generated by pg-proto-parser@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source proto file,
* and run the pg-proto-parser generate command to regenerate this file.
*/
export enum OverridingKind {
  OVERRIDING_KIND_UNDEFINED = 0,
  OVERRIDING_NOT_SET = 1,
  OVERRIDING_USER_VALUE = 2,
  OVERRIDING_SYSTEM_VALUE = 3,
}
export enum QuerySource {
  QUERY_SOURCE_UNDEFINED = 0,
  QSRC_ORIGINAL = 1,
  QSRC_PARSER = 2,
  QSRC_INSTEAD_RULE = 3,
  QSRC_QUAL_INSTEAD_RULE = 4,
  QSRC_NON_INSTEAD_RULE = 5,
}
export enum SortByDir {
  SORT_BY_DIR_UNDEFINED = 0,
  SORTBY_DEFAULT = 1,
  SORTBY_ASC = 2,
  SORTBY_DESC = 3,
  SORTBY_USING = 4,
}
export enum SortByNulls {
  SORT_BY_NULLS_UNDEFINED = 0,
  SORTBY_NULLS_DEFAULT = 1,
  SORTBY_NULLS_FIRST = 2,
  SORTBY_NULLS_LAST = 3,
}
export enum SetQuantifier {
  SET_QUANTIFIER_UNDEFINED = 0,
  SET_QUANTIFIER_DEFAULT = 1,
  SET_QUANTIFIER_ALL = 2,
  SET_QUANTIFIER_DISTINCT = 3,
}
export enum A_Expr_Kind {
  A_EXPR_KIND_UNDEFINED = 0,
  AEXPR_OP = 1,
  AEXPR_OP_ANY = 2,
  AEXPR_OP_ALL = 3,
  AEXPR_DISTINCT = 4,
  AEXPR_NOT_DISTINCT = 5,
  AEXPR_NULLIF = 6,
  AEXPR_IN = 7,
  AEXPR_LIKE = 8,
  AEXPR_ILIKE = 9,
  AEXPR_SIMILAR = 10,
  AEXPR_BETWEEN = 11,
  AEXPR_NOT_BETWEEN = 12,
  AEXPR_BETWEEN_SYM = 13,
  AEXPR_NOT_BETWEEN_SYM = 14,
}
export enum RoleSpecType {
  ROLE_SPEC_TYPE_UNDEFINED = 0,
  ROLESPEC_CSTRING = 1,
  ROLESPEC_CURRENT_ROLE = 2,
  ROLESPEC_CURRENT_USER = 3,
  ROLESPEC_SESSION_USER = 4,
  ROLESPEC_PUBLIC = 5,
}
export enum TableLikeOption {
  TABLE_LIKE_OPTION_UNDEFINED = 0,
  CREATE_TABLE_LIKE_COMMENTS = 1,
  CREATE_TABLE_LIKE_COMPRESSION = 2,
  CREATE_TABLE_LIKE_CONSTRAINTS = 3,
  CREATE_TABLE_LIKE_DEFAULTS = 4,
  CREATE_TABLE_LIKE_GENERATED = 5,
  CREATE_TABLE_LIKE_IDENTITY = 6,
  CREATE_TABLE_LIKE_INDEXES = 7,
  CREATE_TABLE_LIKE_STATISTICS = 8,
  CREATE_TABLE_LIKE_STORAGE = 9,
  CREATE_TABLE_LIKE_ALL = 10,
}
export enum DefElemAction {
  DEF_ELEM_ACTION_UNDEFINED = 0,
  DEFELEM_UNSPEC = 1,
  DEFELEM_SET = 2,
  DEFELEM_ADD = 3,
  DEFELEM_DROP = 4,
}
export enum PartitionStrategy {
  PARTITION_STRATEGY_UNDEFINED = 0,
  PARTITION_STRATEGY_LIST = 1,
  PARTITION_STRATEGY_RANGE = 2,
  PARTITION_STRATEGY_HASH = 3,
}
export enum PartitionRangeDatumKind {
  PARTITION_RANGE_DATUM_KIND_UNDEFINED = 0,
  PARTITION_RANGE_DATUM_MINVALUE = 1,
  PARTITION_RANGE_DATUM_VALUE = 2,
  PARTITION_RANGE_DATUM_MAXVALUE = 3,
}
export enum RTEKind {
  RTEKIND_UNDEFINED = 0,
  RTE_RELATION = 1,
  RTE_SUBQUERY = 2,
  RTE_JOIN = 3,
  RTE_FUNCTION = 4,
  RTE_TABLEFUNC = 5,
  RTE_VALUES = 6,
  RTE_CTE = 7,
  RTE_NAMEDTUPLESTORE = 8,
  RTE_RESULT = 9,
}
export enum WCOKind {
  WCOKIND_UNDEFINED = 0,
  WCO_VIEW_CHECK = 1,
  WCO_RLS_INSERT_CHECK = 2,
  WCO_RLS_UPDATE_CHECK = 3,
  WCO_RLS_CONFLICT_CHECK = 4,
  WCO_RLS_MERGE_UPDATE_CHECK = 5,
  WCO_RLS_MERGE_DELETE_CHECK = 6,
}
export enum GroupingSetKind {
  GROUPING_SET_KIND_UNDEFINED = 0,
  GROUPING_SET_EMPTY = 1,
  GROUPING_SET_SIMPLE = 2,
  GROUPING_SET_ROLLUP = 3,
  GROUPING_SET_CUBE = 4,
  GROUPING_SET_SETS = 5,
}
export enum CTEMaterialize {
  CTEMATERIALIZE_UNDEFINED = 0,
  CTEMaterializeDefault = 1,
  CTEMaterializeAlways = 2,
  CTEMaterializeNever = 3,
}
export enum SetOperation {
  SET_OPERATION_UNDEFINED = 0,
  SETOP_NONE = 1,
  SETOP_UNION = 2,
  SETOP_INTERSECT = 3,
  SETOP_EXCEPT = 4,
}
export enum ObjectType {
  OBJECT_TYPE_UNDEFINED = 0,
  OBJECT_ACCESS_METHOD = 1,
  OBJECT_AGGREGATE = 2,
  OBJECT_AMOP = 3,
  OBJECT_AMPROC = 4,
  OBJECT_ATTRIBUTE = 5,
  OBJECT_CAST = 6,
  OBJECT_COLUMN = 7,
  OBJECT_COLLATION = 8,
  OBJECT_CONVERSION = 9,
  OBJECT_DATABASE = 10,
  OBJECT_DEFAULT = 11,
  OBJECT_DEFACL = 12,
  OBJECT_DOMAIN = 13,
  OBJECT_DOMCONSTRAINT = 14,
  OBJECT_EVENT_TRIGGER = 15,
  OBJECT_EXTENSION = 16,
  OBJECT_FDW = 17,
  OBJECT_FOREIGN_SERVER = 18,
  OBJECT_FOREIGN_TABLE = 19,
  OBJECT_FUNCTION = 20,
  OBJECT_INDEX = 21,
  OBJECT_LANGUAGE = 22,
  OBJECT_LARGEOBJECT = 23,
  OBJECT_MATVIEW = 24,
  OBJECT_OPCLASS = 25,
  OBJECT_OPERATOR = 26,
  OBJECT_OPFAMILY = 27,
  OBJECT_PARAMETER_ACL = 28,
  OBJECT_POLICY = 29,
  OBJECT_PROCEDURE = 30,
  OBJECT_PUBLICATION = 31,
  OBJECT_PUBLICATION_NAMESPACE = 32,
  OBJECT_PUBLICATION_REL = 33,
  OBJECT_ROLE = 34,
  OBJECT_ROUTINE = 35,
  OBJECT_RULE = 36,
  OBJECT_SCHEMA = 37,
  OBJECT_SEQUENCE = 38,
  OBJECT_SUBSCRIPTION = 39,
  OBJECT_STATISTIC_EXT = 40,
  OBJECT_TABCONSTRAINT = 41,
  OBJECT_TABLE = 42,
  OBJECT_TABLESPACE = 43,
  OBJECT_TRANSFORM = 44,
  OBJECT_TRIGGER = 45,
  OBJECT_TSCONFIGURATION = 46,
  OBJECT_TSDICTIONARY = 47,
  OBJECT_TSPARSER = 48,
  OBJECT_TSTEMPLATE = 49,
  OBJECT_TYPE = 50,
  OBJECT_USER_MAPPING = 51,
  OBJECT_VIEW = 52,
}
export enum DropBehavior {
  DROP_BEHAVIOR_UNDEFINED = 0,
  DROP_RESTRICT = 1,
  DROP_CASCADE = 2,
}
export enum AlterTableType {
  ALTER_TABLE_TYPE_UNDEFINED = 0,
  AT_AddColumn = 1,
  AT_AddColumnToView = 2,
  AT_ColumnDefault = 3,
  AT_CookedColumnDefault = 4,
  AT_DropNotNull = 5,
  AT_SetNotNull = 6,
  AT_DropExpression = 7,
  AT_CheckNotNull = 8,
  AT_SetStatistics = 9,
  AT_SetOptions = 10,
  AT_ResetOptions = 11,
  AT_SetStorage = 12,
  AT_SetCompression = 13,
  AT_DropColumn = 14,
  AT_AddIndex = 15,
  AT_ReAddIndex = 16,
  AT_AddConstraint = 17,
  AT_ReAddConstraint = 18,
  AT_ReAddDomainConstraint = 19,
  AT_AlterConstraint = 20,
  AT_ValidateConstraint = 21,
  AT_AddIndexConstraint = 22,
  AT_DropConstraint = 23,
  AT_ReAddComment = 24,
  AT_AlterColumnType = 25,
  AT_AlterColumnGenericOptions = 26,
  AT_ChangeOwner = 27,
  AT_ClusterOn = 28,
  AT_DropCluster = 29,
  AT_SetLogged = 30,
  AT_SetUnLogged = 31,
  AT_DropOids = 32,
  AT_SetAccessMethod = 33,
  AT_SetTableSpace = 34,
  AT_SetRelOptions = 35,
  AT_ResetRelOptions = 36,
  AT_ReplaceRelOptions = 37,
  AT_EnableTrig = 38,
  AT_EnableAlwaysTrig = 39,
  AT_EnableReplicaTrig = 40,
  AT_DisableTrig = 41,
  AT_EnableTrigAll = 42,
  AT_DisableTrigAll = 43,
  AT_EnableTrigUser = 44,
  AT_DisableTrigUser = 45,
  AT_EnableRule = 46,
  AT_EnableAlwaysRule = 47,
  AT_EnableReplicaRule = 48,
  AT_DisableRule = 49,
  AT_AddInherit = 50,
  AT_DropInherit = 51,
  AT_AddOf = 52,
  AT_DropOf = 53,
  AT_ReplicaIdentity = 54,
  AT_EnableRowSecurity = 55,
  AT_DisableRowSecurity = 56,
  AT_ForceRowSecurity = 57,
  AT_NoForceRowSecurity = 58,
  AT_GenericOptions = 59,
  AT_AttachPartition = 60,
  AT_DetachPartition = 61,
  AT_DetachPartitionFinalize = 62,
  AT_AddIdentity = 63,
  AT_SetIdentity = 64,
  AT_DropIdentity = 65,
  AT_ReAddStatistics = 66,
}
export enum GrantTargetType {
  GRANT_TARGET_TYPE_UNDEFINED = 0,
  ACL_TARGET_OBJECT = 1,
  ACL_TARGET_ALL_IN_SCHEMA = 2,
  ACL_TARGET_DEFAULTS = 3,
}
export enum VariableSetKind {
  VARIABLE_SET_KIND_UNDEFINED = 0,
  VAR_SET_VALUE = 1,
  VAR_SET_DEFAULT = 2,
  VAR_SET_CURRENT = 3,
  VAR_SET_MULTI = 4,
  VAR_RESET = 5,
  VAR_RESET_ALL = 6,
}
export enum ConstrType {
  CONSTR_TYPE_UNDEFINED = 0,
  CONSTR_NULL = 1,
  CONSTR_NOTNULL = 2,
  CONSTR_DEFAULT = 3,
  CONSTR_IDENTITY = 4,
  CONSTR_GENERATED = 5,
  CONSTR_CHECK = 6,
  CONSTR_PRIMARY = 7,
  CONSTR_UNIQUE = 8,
  CONSTR_EXCLUSION = 9,
  CONSTR_FOREIGN = 10,
  CONSTR_ATTR_DEFERRABLE = 11,
  CONSTR_ATTR_NOT_DEFERRABLE = 12,
  CONSTR_ATTR_DEFERRED = 13,
  CONSTR_ATTR_IMMEDIATE = 14,
}
export enum ImportForeignSchemaType {
  IMPORT_FOREIGN_SCHEMA_TYPE_UNDEFINED = 0,
  FDW_IMPORT_SCHEMA_ALL = 1,
  FDW_IMPORT_SCHEMA_LIMIT_TO = 2,
  FDW_IMPORT_SCHEMA_EXCEPT = 3,
}
export enum RoleStmtType {
  ROLE_STMT_TYPE_UNDEFINED = 0,
  ROLESTMT_ROLE = 1,
  ROLESTMT_USER = 2,
  ROLESTMT_GROUP = 3,
}
export enum FetchDirection {
  FETCH_DIRECTION_UNDEFINED = 0,
  FETCH_FORWARD = 1,
  FETCH_BACKWARD = 2,
  FETCH_ABSOLUTE = 3,
  FETCH_RELATIVE = 4,
}
export enum FunctionParameterMode {
  FUNCTION_PARAMETER_MODE_UNDEFINED = 0,
  FUNC_PARAM_IN = 1,
  FUNC_PARAM_OUT = 2,
  FUNC_PARAM_INOUT = 3,
  FUNC_PARAM_VARIADIC = 4,
  FUNC_PARAM_TABLE = 5,
  FUNC_PARAM_DEFAULT = 6,
}
export enum TransactionStmtKind {
  TRANSACTION_STMT_KIND_UNDEFINED = 0,
  TRANS_STMT_BEGIN = 1,
  TRANS_STMT_START = 2,
  TRANS_STMT_COMMIT = 3,
  TRANS_STMT_ROLLBACK = 4,
  TRANS_STMT_SAVEPOINT = 5,
  TRANS_STMT_RELEASE = 6,
  TRANS_STMT_ROLLBACK_TO = 7,
  TRANS_STMT_PREPARE = 8,
  TRANS_STMT_COMMIT_PREPARED = 9,
  TRANS_STMT_ROLLBACK_PREPARED = 10,
}
export enum ViewCheckOption {
  VIEW_CHECK_OPTION_UNDEFINED = 0,
  NO_CHECK_OPTION = 1,
  LOCAL_CHECK_OPTION = 2,
  CASCADED_CHECK_OPTION = 3,
}
export enum DiscardMode {
  DISCARD_MODE_UNDEFINED = 0,
  DISCARD_ALL = 1,
  DISCARD_PLANS = 2,
  DISCARD_SEQUENCES = 3,
  DISCARD_TEMP = 4,
}
export enum ReindexObjectType {
  REINDEX_OBJECT_TYPE_UNDEFINED = 0,
  REINDEX_OBJECT_INDEX = 1,
  REINDEX_OBJECT_TABLE = 2,
  REINDEX_OBJECT_SCHEMA = 3,
  REINDEX_OBJECT_SYSTEM = 4,
  REINDEX_OBJECT_DATABASE = 5,
}
export enum AlterTSConfigType {
  ALTER_TSCONFIG_TYPE_UNDEFINED = 0,
  ALTER_TSCONFIG_ADD_MAPPING = 1,
  ALTER_TSCONFIG_ALTER_MAPPING_FOR_TOKEN = 2,
  ALTER_TSCONFIG_REPLACE_DICT = 3,
  ALTER_TSCONFIG_REPLACE_DICT_FOR_TOKEN = 4,
  ALTER_TSCONFIG_DROP_MAPPING = 5,
}
export enum PublicationObjSpecType {
  PUBLICATION_OBJ_SPEC_TYPE_UNDEFINED = 0,
  PUBLICATIONOBJ_TABLE = 1,
  PUBLICATIONOBJ_TABLES_IN_SCHEMA = 2,
  PUBLICATIONOBJ_TABLES_IN_CUR_SCHEMA = 3,
  PUBLICATIONOBJ_CONTINUATION = 4,
}
export enum AlterPublicationAction {
  ALTER_PUBLICATION_ACTION_UNDEFINED = 0,
  AP_AddObjects = 1,
  AP_DropObjects = 2,
  AP_SetObjects = 3,
}
export enum AlterSubscriptionType {
  ALTER_SUBSCRIPTION_TYPE_UNDEFINED = 0,
  ALTER_SUBSCRIPTION_OPTIONS = 1,
  ALTER_SUBSCRIPTION_CONNECTION = 2,
  ALTER_SUBSCRIPTION_SET_PUBLICATION = 3,
  ALTER_SUBSCRIPTION_ADD_PUBLICATION = 4,
  ALTER_SUBSCRIPTION_DROP_PUBLICATION = 5,
  ALTER_SUBSCRIPTION_REFRESH = 6,
  ALTER_SUBSCRIPTION_ENABLED = 7,
  ALTER_SUBSCRIPTION_SKIP = 8,
}
export enum OnCommitAction {
  ON_COMMIT_ACTION_UNDEFINED = 0,
  ONCOMMIT_NOOP = 1,
  ONCOMMIT_PRESERVE_ROWS = 2,
  ONCOMMIT_DELETE_ROWS = 3,
  ONCOMMIT_DROP = 4,
}
export enum ParamKind {
  PARAM_KIND_UNDEFINED = 0,
  PARAM_EXTERN = 1,
  PARAM_EXEC = 2,
  PARAM_SUBLINK = 3,
  PARAM_MULTIEXPR = 4,
}
export enum CoercionContext {
  COERCION_CONTEXT_UNDEFINED = 0,
  COERCION_IMPLICIT = 1,
  COERCION_ASSIGNMENT = 2,
  COERCION_PLPGSQL = 3,
  COERCION_EXPLICIT = 4,
}
export enum CoercionForm {
  COERCION_FORM_UNDEFINED = 0,
  COERCE_EXPLICIT_CALL = 1,
  COERCE_EXPLICIT_CAST = 2,
  COERCE_IMPLICIT_CAST = 3,
  COERCE_SQL_SYNTAX = 4,
}
export enum BoolExprType {
  BOOL_EXPR_TYPE_UNDEFINED = 0,
  AND_EXPR = 1,
  OR_EXPR = 2,
  NOT_EXPR = 3,
}
export enum SubLinkType {
  SUB_LINK_TYPE_UNDEFINED = 0,
  EXISTS_SUBLINK = 1,
  ALL_SUBLINK = 2,
  ANY_SUBLINK = 3,
  ROWCOMPARE_SUBLINK = 4,
  EXPR_SUBLINK = 5,
  MULTIEXPR_SUBLINK = 6,
  ARRAY_SUBLINK = 7,
  CTE_SUBLINK = 8,
}
export enum RowCompareType {
  ROW_COMPARE_TYPE_UNDEFINED = 0,
  ROWCOMPARE_LT = 1,
  ROWCOMPARE_LE = 2,
  ROWCOMPARE_EQ = 3,
  ROWCOMPARE_GE = 4,
  ROWCOMPARE_GT = 5,
  ROWCOMPARE_NE = 6,
}
export enum MinMaxOp {
  MIN_MAX_OP_UNDEFINED = 0,
  IS_GREATEST = 1,
  IS_LEAST = 2,
}
export enum SQLValueFunctionOp {
  SQLVALUE_FUNCTION_OP_UNDEFINED = 0,
  SVFOP_CURRENT_DATE = 1,
  SVFOP_CURRENT_TIME = 2,
  SVFOP_CURRENT_TIME_N = 3,
  SVFOP_CURRENT_TIMESTAMP = 4,
  SVFOP_CURRENT_TIMESTAMP_N = 5,
  SVFOP_LOCALTIME = 6,
  SVFOP_LOCALTIME_N = 7,
  SVFOP_LOCALTIMESTAMP = 8,
  SVFOP_LOCALTIMESTAMP_N = 9,
  SVFOP_CURRENT_ROLE = 10,
  SVFOP_CURRENT_USER = 11,
  SVFOP_USER = 12,
  SVFOP_SESSION_USER = 13,
  SVFOP_CURRENT_CATALOG = 14,
  SVFOP_CURRENT_SCHEMA = 15,
}
export enum XmlExprOp {
  XML_EXPR_OP_UNDEFINED = 0,
  IS_XMLCONCAT = 1,
  IS_XMLELEMENT = 2,
  IS_XMLFOREST = 3,
  IS_XMLPARSE = 4,
  IS_XMLPI = 5,
  IS_XMLROOT = 6,
  IS_XMLSERIALIZE = 7,
  IS_DOCUMENT = 8,
}
export enum XmlOptionType {
  XML_OPTION_TYPE_UNDEFINED = 0,
  XMLOPTION_DOCUMENT = 1,
  XMLOPTION_CONTENT = 2,
}
export enum JsonEncoding {
  JSON_ENCODING_UNDEFINED = 0,
  JS_ENC_DEFAULT = 1,
  JS_ENC_UTF8 = 2,
  JS_ENC_UTF16 = 3,
  JS_ENC_UTF32 = 4,
}
export enum JsonFormatType {
  JSON_FORMAT_TYPE_UNDEFINED = 0,
  JS_FORMAT_DEFAULT = 1,
  JS_FORMAT_JSON = 2,
  JS_FORMAT_JSONB = 3,
}
export enum JsonConstructorType {
  JSON_CONSTRUCTOR_TYPE_UNDEFINED = 0,
  JSCTOR_JSON_OBJECT = 1,
  JSCTOR_JSON_ARRAY = 2,
  JSCTOR_JSON_OBJECTAGG = 3,
  JSCTOR_JSON_ARRAYAGG = 4,
}
export enum JsonValueType {
  JSON_VALUE_TYPE_UNDEFINED = 0,
  JS_TYPE_ANY = 1,
  JS_TYPE_OBJECT = 2,
  JS_TYPE_ARRAY = 3,
  JS_TYPE_SCALAR = 4,
}
export enum NullTestType {
  NULL_TEST_TYPE_UNDEFINED = 0,
  IS_NULL = 1,
  IS_NOT_NULL = 2,
}
export enum BoolTestType {
  BOOL_TEST_TYPE_UNDEFINED = 0,
  IS_TRUE = 1,
  IS_NOT_TRUE = 2,
  IS_FALSE = 3,
  IS_NOT_FALSE = 4,
  IS_UNKNOWN = 5,
  IS_NOT_UNKNOWN = 6,
}
export enum CmdType {
  CMD_TYPE_UNDEFINED = 0,
  CMD_UNKNOWN = 1,
  CMD_SELECT = 2,
  CMD_UPDATE = 3,
  CMD_INSERT = 4,
  CMD_DELETE = 5,
  CMD_MERGE = 6,
  CMD_UTILITY = 7,
  CMD_NOTHING = 8,
}
export enum JoinType {
  JOIN_TYPE_UNDEFINED = 0,
  JOIN_INNER = 1,
  JOIN_LEFT = 2,
  JOIN_FULL = 3,
  JOIN_RIGHT = 4,
  JOIN_SEMI = 5,
  JOIN_ANTI = 6,
  JOIN_RIGHT_ANTI = 7,
  JOIN_UNIQUE_OUTER = 8,
  JOIN_UNIQUE_INNER = 9,
}
export enum AggStrategy {
  AGG_STRATEGY_UNDEFINED = 0,
  AGG_PLAIN = 1,
  AGG_SORTED = 2,
  AGG_HASHED = 3,
  AGG_MIXED = 4,
}
export enum AggSplit {
  AGG_SPLIT_UNDEFINED = 0,
  AGGSPLIT_SIMPLE = 1,
  AGGSPLIT_INITIAL_SERIAL = 2,
  AGGSPLIT_FINAL_DESERIAL = 3,
}
export enum SetOpCmd {
  SET_OP_CMD_UNDEFINED = 0,
  SETOPCMD_INTERSECT = 1,
  SETOPCMD_INTERSECT_ALL = 2,
  SETOPCMD_EXCEPT = 3,
  SETOPCMD_EXCEPT_ALL = 4,
}
export enum SetOpStrategy {
  SET_OP_STRATEGY_UNDEFINED = 0,
  SETOP_SORTED = 1,
  SETOP_HASHED = 2,
}
export enum OnConflictAction {
  ON_CONFLICT_ACTION_UNDEFINED = 0,
  ONCONFLICT_NONE = 1,
  ONCONFLICT_NOTHING = 2,
  ONCONFLICT_UPDATE = 3,
}
export enum LimitOption {
  LIMIT_OPTION_UNDEFINED = 0,
  LIMIT_OPTION_DEFAULT = 1,
  LIMIT_OPTION_COUNT = 2,
  LIMIT_OPTION_WITH_TIES = 3,
}
export enum LockClauseStrength {
  LOCK_CLAUSE_STRENGTH_UNDEFINED = 0,
  LCS_NONE = 1,
  LCS_FORKEYSHARE = 2,
  LCS_FORSHARE = 3,
  LCS_FORNOKEYUPDATE = 4,
  LCS_FORUPDATE = 5,
}
export enum LockWaitPolicy {
  LOCK_WAIT_POLICY_UNDEFINED = 0,
  LockWaitBlock = 1,
  LockWaitSkip = 2,
  LockWaitError = 3,
}
export enum LockTupleMode {
  LOCK_TUPLE_MODE_UNDEFINED = 0,
  LockTupleKeyShare = 1,
  LockTupleShare = 2,
  LockTupleNoKeyExclusive = 3,
  LockTupleExclusive = 4,
}
export enum KeywordKind {
  NO_KEYWORD = 0,
  UNRESERVED_KEYWORD = 1,
  COL_NAME_KEYWORD = 2,
  TYPE_FUNC_NAME_KEYWORD = 3,
  RESERVED_KEYWORD = 4,
}
export enum Token {
  NUL = 0,
  ASCII_36 = 36,
  ASCII_37 = 37,
  ASCII_40 = 40,
  ASCII_41 = 41,
  ASCII_42 = 42,
  ASCII_43 = 43,
  ASCII_44 = 44,
  ASCII_45 = 45,
  ASCII_46 = 46,
  ASCII_47 = 47,
  ASCII_58 = 58,
  ASCII_59 = 59,
  ASCII_60 = 60,
  ASCII_61 = 61,
  ASCII_62 = 62,
  ASCII_63 = 63,
  ASCII_91 = 91,
  ASCII_92 = 92,
  ASCII_93 = 93,
  ASCII_94 = 94,
  IDENT = 258,
  UIDENT = 259,
  FCONST = 260,
  SCONST = 261,
  USCONST = 262,
  BCONST = 263,
  XCONST = 264,
  Op = 265,
  ICONST = 266,
  PARAM = 267,
  TYPECAST = 268,
  DOT_DOT = 269,
  COLON_EQUALS = 270,
  EQUALS_GREATER = 271,
  LESS_EQUALS = 272,
  GREATER_EQUALS = 273,
  NOT_EQUALS = 274,
  SQL_COMMENT = 275,
  C_COMMENT = 276,
  ABORT_P = 277,
  ABSENT = 278,
  ABSOLUTE_P = 279,
  ACCESS = 280,
  ACTION = 281,
  ADD_P = 282,
  ADMIN = 283,
  AFTER = 284,
  AGGREGATE = 285,
  ALL = 286,
  ALSO = 287,
  ALTER = 288,
  ALWAYS = 289,
  ANALYSE = 290,
  ANALYZE = 291,
  AND = 292,
  ANY = 293,
  ARRAY = 294,
  AS = 295,
  ASC = 296,
  ASENSITIVE = 297,
  ASSERTION = 298,
  ASSIGNMENT = 299,
  ASYMMETRIC = 300,
  ATOMIC = 301,
  AT = 302,
  ATTACH = 303,
  ATTRIBUTE = 304,
  AUTHORIZATION = 305,
  BACKWARD = 306,
  BEFORE = 307,
  BEGIN_P = 308,
  BETWEEN = 309,
  BIGINT = 310,
  BINARY = 311,
  BIT = 312,
  BOOLEAN_P = 313,
  BOTH = 314,
  BREADTH = 315,
  BY = 316,
  CACHE = 317,
  CALL = 318,
  CALLED = 319,
  CASCADE = 320,
  CASCADED = 321,
  CASE = 322,
  CAST = 323,
  CATALOG_P = 324,
  CHAIN = 325,
  CHAR_P = 326,
  CHARACTER = 327,
  CHARACTERISTICS = 328,
  CHECK = 329,
  CHECKPOINT = 330,
  CLASS = 331,
  CLOSE = 332,
  CLUSTER = 333,
  COALESCE = 334,
  COLLATE = 335,
  COLLATION = 336,
  COLUMN = 337,
  COLUMNS = 338,
  COMMENT = 339,
  COMMENTS = 340,
  COMMIT = 341,
  COMMITTED = 342,
  COMPRESSION = 343,
  CONCURRENTLY = 344,
  CONFIGURATION = 345,
  CONFLICT = 346,
  CONNECTION = 347,
  CONSTRAINT = 348,
  CONSTRAINTS = 349,
  CONTENT_P = 350,
  CONTINUE_P = 351,
  CONVERSION_P = 352,
  COPY = 353,
  COST = 354,
  CREATE = 355,
  CROSS = 356,
  CSV = 357,
  CUBE = 358,
  CURRENT_P = 359,
  CURRENT_CATALOG = 360,
  CURRENT_DATE = 361,
  CURRENT_ROLE = 362,
  CURRENT_SCHEMA = 363,
  CURRENT_TIME = 364,
  CURRENT_TIMESTAMP = 365,
  CURRENT_USER = 366,
  CURSOR = 367,
  CYCLE = 368,
  DATA_P = 369,
  DATABASE = 370,
  DAY_P = 371,
  DEALLOCATE = 372,
  DEC = 373,
  DECIMAL_P = 374,
  DECLARE = 375,
  DEFAULT = 376,
  DEFAULTS = 377,
  DEFERRABLE = 378,
  DEFERRED = 379,
  DEFINER = 380,
  DELETE_P = 381,
  DELIMITER = 382,
  DELIMITERS = 383,
  DEPENDS = 384,
  DEPTH = 385,
  DESC = 386,
  DETACH = 387,
  DICTIONARY = 388,
  DISABLE_P = 389,
  DISCARD = 390,
  DISTINCT = 391,
  DO = 392,
  DOCUMENT_P = 393,
  DOMAIN_P = 394,
  DOUBLE_P = 395,
  DROP = 396,
  EACH = 397,
  ELSE = 398,
  ENABLE_P = 399,
  ENCODING = 400,
  ENCRYPTED = 401,
  END_P = 402,
  ENUM_P = 403,
  ESCAPE = 404,
  EVENT = 405,
  EXCEPT = 406,
  EXCLUDE = 407,
  EXCLUDING = 408,
  EXCLUSIVE = 409,
  EXECUTE = 410,
  EXISTS = 411,
  EXPLAIN = 412,
  EXPRESSION = 413,
  EXTENSION = 414,
  EXTERNAL = 415,
  EXTRACT = 416,
  FALSE_P = 417,
  FAMILY = 418,
  FETCH = 419,
  FILTER = 420,
  FINALIZE = 421,
  FIRST_P = 422,
  FLOAT_P = 423,
  FOLLOWING = 424,
  FOR = 425,
  FORCE = 426,
  FOREIGN = 427,
  FORMAT = 428,
  FORWARD = 429,
  FREEZE = 430,
  FROM = 431,
  FULL = 432,
  FUNCTION = 433,
  FUNCTIONS = 434,
  GENERATED = 435,
  GLOBAL = 436,
  GRANT = 437,
  GRANTED = 438,
  GREATEST = 439,
  GROUP_P = 440,
  GROUPING = 441,
  GROUPS = 442,
  HANDLER = 443,
  HAVING = 444,
  HEADER_P = 445,
  HOLD = 446,
  HOUR_P = 447,
  IDENTITY_P = 448,
  IF_P = 449,
  ILIKE = 450,
  IMMEDIATE = 451,
  IMMUTABLE = 452,
  IMPLICIT_P = 453,
  IMPORT_P = 454,
  IN_P = 455,
  INCLUDE = 456,
  INCLUDING = 457,
  INCREMENT = 458,
  INDENT = 459,
  INDEX = 460,
  INDEXES = 461,
  INHERIT = 462,
  INHERITS = 463,
  INITIALLY = 464,
  INLINE_P = 465,
  INNER_P = 466,
  INOUT = 467,
  INPUT_P = 468,
  INSENSITIVE = 469,
  INSERT = 470,
  INSTEAD = 471,
  INT_P = 472,
  INTEGER = 473,
  INTERSECT = 474,
  INTERVAL = 475,
  INTO = 476,
  INVOKER = 477,
  IS = 478,
  ISNULL = 479,
  ISOLATION = 480,
  JOIN = 481,
  JSON = 482,
  JSON_ARRAY = 483,
  JSON_ARRAYAGG = 484,
  JSON_OBJECT = 485,
  JSON_OBJECTAGG = 486,
  KEY = 487,
  KEYS = 488,
  LABEL = 489,
  LANGUAGE = 490,
  LARGE_P = 491,
  LAST_P = 492,
  LATERAL_P = 493,
  LEADING = 494,
  LEAKPROOF = 495,
  LEAST = 496,
  LEFT = 497,
  LEVEL = 498,
  LIKE = 499,
  LIMIT = 500,
  LISTEN = 501,
  LOAD = 502,
  LOCAL = 503,
  LOCALTIME = 504,
  LOCALTIMESTAMP = 505,
  LOCATION = 506,
  LOCK_P = 507,
  LOCKED = 508,
  LOGGED = 509,
  MAPPING = 510,
  MATCH = 511,
  MATCHED = 512,
  MATERIALIZED = 513,
  MAXVALUE = 514,
  MERGE = 515,
  METHOD = 516,
  MINUTE_P = 517,
  MINVALUE = 518,
  MODE = 519,
  MONTH_P = 520,
  MOVE = 521,
  NAME_P = 522,
  NAMES = 523,
  NATIONAL = 524,
  NATURAL = 525,
  NCHAR = 526,
  NEW = 527,
  NEXT = 528,
  NFC = 529,
  NFD = 530,
  NFKC = 531,
  NFKD = 532,
  NO = 533,
  NONE = 534,
  NORMALIZE = 535,
  NORMALIZED = 536,
  NOT = 537,
  NOTHING = 538,
  NOTIFY = 539,
  NOTNULL = 540,
  NOWAIT = 541,
  NULL_P = 542,
  NULLIF = 543,
  NULLS_P = 544,
  NUMERIC = 545,
  OBJECT_P = 546,
  OF = 547,
  OFF = 548,
  OFFSET = 549,
  OIDS = 550,
  OLD = 551,
  ON = 552,
  ONLY = 553,
  OPERATOR = 554,
  OPTION = 555,
  OPTIONS = 556,
  OR = 557,
  ORDER = 558,
  ORDINALITY = 559,
  OTHERS = 560,
  OUT_P = 561,
  OUTER_P = 562,
  OVER = 563,
  OVERLAPS = 564,
  OVERLAY = 565,
  OVERRIDING = 566,
  OWNED = 567,
  OWNER = 568,
  PARALLEL = 569,
  PARAMETER = 570,
  PARSER = 571,
  PARTIAL = 572,
  PARTITION = 573,
  PASSING = 574,
  PASSWORD = 575,
  PLACING = 576,
  PLANS = 577,
  POLICY = 578,
  POSITION = 579,
  PRECEDING = 580,
  PRECISION = 581,
  PRESERVE = 582,
  PREPARE = 583,
  PREPARED = 584,
  PRIMARY = 585,
  PRIOR = 586,
  PRIVILEGES = 587,
  PROCEDURAL = 588,
  PROCEDURE = 589,
  PROCEDURES = 590,
  PROGRAM = 591,
  PUBLICATION = 592,
  QUOTE = 593,
  RANGE = 594,
  READ = 595,
  REAL = 596,
  REASSIGN = 597,
  RECHECK = 598,
  RECURSIVE = 599,
  REF_P = 600,
  REFERENCES = 601,
  REFERENCING = 602,
  REFRESH = 603,
  REINDEX = 604,
  RELATIVE_P = 605,
  RELEASE = 606,
  RENAME = 607,
  REPEATABLE = 608,
  REPLACE = 609,
  REPLICA = 610,
  RESET = 611,
  RESTART = 612,
  RESTRICT = 613,
  RETURN = 614,
  RETURNING = 615,
  RETURNS = 616,
  REVOKE = 617,
  RIGHT = 618,
  ROLE = 619,
  ROLLBACK = 620,
  ROLLUP = 621,
  ROUTINE = 622,
  ROUTINES = 623,
  ROW = 624,
  ROWS = 625,
  RULE = 626,
  SAVEPOINT = 627,
  SCALAR = 628,
  SCHEMA = 629,
  SCHEMAS = 630,
  SCROLL = 631,
  SEARCH = 632,
  SECOND_P = 633,
  SECURITY = 634,
  SELECT = 635,
  SEQUENCE = 636,
  SEQUENCES = 637,
  SERIALIZABLE = 638,
  SERVER = 639,
  SESSION = 640,
  SESSION_USER = 641,
  SET = 642,
  SETS = 643,
  SETOF = 644,
  SHARE = 645,
  SHOW = 646,
  SIMILAR = 647,
  SIMPLE = 648,
  SKIP = 649,
  SMALLINT = 650,
  SNAPSHOT = 651,
  SOME = 652,
  SQL_P = 653,
  STABLE = 654,
  STANDALONE_P = 655,
  START = 656,
  STATEMENT = 657,
  STATISTICS = 658,
  STDIN = 659,
  STDOUT = 660,
  STORAGE = 661,
  STORED = 662,
  STRICT_P = 663,
  STRIP_P = 664,
  SUBSCRIPTION = 665,
  SUBSTRING = 666,
  SUPPORT = 667,
  SYMMETRIC = 668,
  SYSID = 669,
  SYSTEM_P = 670,
  SYSTEM_USER = 671,
  TABLE = 672,
  TABLES = 673,
  TABLESAMPLE = 674,
  TABLESPACE = 675,
  TEMP = 676,
  TEMPLATE = 677,
  TEMPORARY = 678,
  TEXT_P = 679,
  THEN = 680,
  TIES = 681,
  TIME = 682,
  TIMESTAMP = 683,
  TO = 684,
  TRAILING = 685,
  TRANSACTION = 686,
  TRANSFORM = 687,
  TREAT = 688,
  TRIGGER = 689,
  TRIM = 690,
  TRUE_P = 691,
  TRUNCATE = 692,
  TRUSTED = 693,
  TYPE_P = 694,
  TYPES_P = 695,
  UESCAPE = 696,
  UNBOUNDED = 697,
  UNCOMMITTED = 698,
  UNENCRYPTED = 699,
  UNION = 700,
  UNIQUE = 701,
  UNKNOWN = 702,
  UNLISTEN = 703,
  UNLOGGED = 704,
  UNTIL = 705,
  UPDATE = 706,
  USER = 707,
  USING = 708,
  VACUUM = 709,
  VALID = 710,
  VALIDATE = 711,
  VALIDATOR = 712,
  VALUE_P = 713,
  VALUES = 714,
  VARCHAR = 715,
  VARIADIC = 716,
  VARYING = 717,
  VERBOSE = 718,
  VERSION_P = 719,
  VIEW = 720,
  VIEWS = 721,
  VOLATILE = 722,
  WHEN = 723,
  WHERE = 724,
  WHITESPACE_P = 725,
  WINDOW = 726,
  WITH = 727,
  WITHIN = 728,
  WITHOUT = 729,
  WORK = 730,
  WRAPPER = 731,
  WRITE = 732,
  XML_P = 733,
  XMLATTRIBUTES = 734,
  XMLCONCAT = 735,
  XMLELEMENT = 736,
  XMLEXISTS = 737,
  XMLFOREST = 738,
  XMLNAMESPACES = 739,
  XMLPARSE = 740,
  XMLPI = 741,
  XMLROOT = 742,
  XMLSERIALIZE = 743,
  XMLTABLE = 744,
  YEAR_P = 745,
  YES_P = 746,
  ZONE = 747,
  FORMAT_LA = 748,
  NOT_LA = 749,
  NULLS_LA = 750,
  WITH_LA = 751,
  WITHOUT_LA = 752,
  MODE_TYPE_NAME = 753,
  MODE_PLPGSQL_EXPR = 754,
  MODE_PLPGSQL_ASSIGN1 = 755,
  MODE_PLPGSQL_ASSIGN2 = 756,
  MODE_PLPGSQL_ASSIGN3 = 757,
  UMINUS = 758,
}