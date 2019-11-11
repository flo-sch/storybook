export enum InspectionType {
  IDENTIFIER = 'Identifier',
  LITERAL = 'Literal',
  OBJECT = 'Object',
  ARRAY = 'Array',
  FUNCTION = 'Function',
  CLASS = 'Class',
  ELEMENT = 'Element',
  UNKNOWN = 'Unknown',
}

export interface BaseInspectionInferedType {
  type: InspectionType;
}

export interface InspectionIdentifier extends BaseInspectionInferedType {
  type: InspectionType.IDENTIFIER;
  identifier: string;
}

export interface InspectionLiteral extends BaseInspectionInferedType {
  type: InspectionType.LITERAL;
}

export interface InspectionObject extends BaseInspectionInferedType {
  type: InspectionType.OBJECT;
}

export interface InspectionArray extends BaseInspectionInferedType {
  type: InspectionType.ARRAY;
}

export interface InspectionClass extends BaseInspectionInferedType {
  type: InspectionType.CLASS;
  identifier: string;
  isDefinition: boolean;
}

export interface InspectionFunction extends BaseInspectionInferedType {
  type: InspectionType.FUNCTION;
  identifier?: string;
  isDefinition: boolean;
}

export interface InspectionElement extends BaseInspectionInferedType {
  type: InspectionType.ELEMENT;
  identifier?: string;
  isDefinition: boolean;
  isJsx: boolean;
}

export interface InspectionUnknown extends BaseInspectionInferedType {
  type: InspectionType.UNKNOWN;
}

export type InspectionInferedType =
  | InspectionIdentifier
  | InspectionLiteral
  | InspectionObject
  | InspectionArray
  | InspectionClass
  | InspectionFunction
  | InspectionElement
  | InspectionUnknown;

export interface InspectionResult {
  inferedType: InspectionInferedType;
  ast?: any;
}
