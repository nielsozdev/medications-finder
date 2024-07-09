import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Establishment = {
  __typename?: 'Establishment';
  address: Scalars['String']['output'];
  commercialName: Scalars['String']['output'];
  establishmentType: Scalars['String']['output'];
  establishmentTypeId: Scalars['String']['output'];
  idEstablishment: Scalars['String']['output'];
  location: Locations;
  phone?: Maybe<Scalars['String']['output']>;
  ubigeo: Scalars['String']['output'];
};

export type Family = {
  __typename?: 'Family';
  family: Scalars['String']['output'];
  idFamily: Scalars['String']['output'];
};

export type FamilyInfo = {
  __typename?: 'FamilyInfo';
  count: Scalars['Int']['output'];
  family: Scalars['String']['output'];
  subFamilies: Array<SubFamilyInfo>;
  totalConcentrations: Array<Scalars['String']['output']>;
  totalFractions: Array<Scalars['Int']['output']>;
  totalPharmaceuticalFormGroup: Array<Scalars['String']['output']>;
  totalPharmaceuticalFormName: Array<Scalars['String']['output']>;
};

export type Locations = {
  __typename?: 'Locations';
  department?: Maybe<Scalars['String']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
};

export type Manufacturer = {
  __typename?: 'Manufacturer';
  idManufacturer?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  titularName: Scalars['String']['output'];
};

export type MedicationsPrice = {
  __typename?: 'MedicationsPrice';
  establishment: Establishment;
  family: Scalars['String']['output'];
  idExtracted: Scalars['String']['output'];
  idSubFamily: Scalars['String']['output'];
  prices: Array<Maybe<Scalars['Float']['output']>>;
  subFamily: SubFamilyWithManufacturer;
  suggestion: Scalars['String']['output'];
  updateAt: Scalars['String']['output'];
};

export type Price = {
  __typename?: 'Price';
  establishment: Establishment;
  family: Scalars['String']['output'];
  idExtracted: Scalars['String']['output'];
  prices: Array<Scalars['Float']['output']>;
  subFamily: Scalars['String']['output'];
  suggestion: Scalars['String']['output'];
  updateAt: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  allMedicationPrices: Array<MedicationsPrice>;
  getMedicationPrices: Array<MedicationsPrice>;
  getMedicationsFromFamily?: Maybe<Scalars['String']['output']>;
  getSearchResults: SearchResults;
  medicationPrices: Array<MedicationsPrice>;
};


export type QueryGetMedicationPricesArgs = {
  department: Scalars['String']['input'];
  district?: InputMaybe<Scalars['String']['input']>;
  medication: Scalars['String']['input'];
  province: Scalars['String']['input'];
};


export type QueryGetMedicationsFromFamilyArgs = {
  family: Scalars['String']['input'];
};


export type QueryGetSearchResultsArgs = {
  medication: Scalars['String']['input'];
};


export type QueryMedicationPricesArgs = {
  department: Scalars['String']['input'];
  district?: InputMaybe<Scalars['String']['input']>;
  medication: Scalars['String']['input'];
  province: Scalars['String']['input'];
};

export type SearchResults = {
  __typename?: 'SearchResults';
  allConcentrations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  allFamilies?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  allFractions?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  allPharmaceuticalFormGroup?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  allPharmaceuticalFormName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  allSubFamilies?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  familiesWithSubFamilies: Array<FamilyInfo>;
};

export type SubFamily = {
  __typename?: 'SubFamily';
  concentration: Scalars['String']['output'];
  family: Scalars['String']['output'];
  fractions: Scalars['Int']['output'];
  group: Scalars['String']['output'];
  idFamily: Scalars['String']['output'];
  idSubFamily: Scalars['String']['output'];
  pharmaceuticalFormGroup: Scalars['String']['output'];
  pharmaceuticalFormGroupCode: Scalars['String']['output'];
  pharmaceuticalFormName: Scalars['String']['output'];
  subFamily: Scalars['String']['output'];
  totalActivePrinciple: Scalars['String']['output'];
};

export type SubFamilyInfo = {
  __typename?: 'SubFamilyInfo';
  concentrations: Array<Scalars['String']['output']>;
  count: Scalars['Int']['output'];
  fractions: Array<Scalars['Int']['output']>;
  pharmaceuticalFormGroup: Array<Scalars['String']['output']>;
  pharmaceuticalFormName: Array<Scalars['String']['output']>;
  subFamily: Scalars['String']['output'];
};

export type SubFamilyWithManufacturer = {
  __typename?: 'SubFamilyWithManufacturer';
  concentration: Scalars['String']['output'];
  family: Scalars['String']['output'];
  fractions: Scalars['Int']['output'];
  group: Scalars['String']['output'];
  idFamily: Scalars['String']['output'];
  idManufacturer: Scalars['String']['output'];
  idSubFamily: Scalars['String']['output'];
  manufacturer: Manufacturer;
  pharmaceuticalFormGroup: Scalars['String']['output'];
  pharmaceuticalFormGroupCode: Scalars['String']['output'];
  pharmaceuticalFormName: Scalars['String']['output'];
  subFamily: Scalars['String']['output'];
  totalActivePrinciple: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Establishment: ResolverTypeWrapper<Establishment>;
  Family: ResolverTypeWrapper<Family>;
  FamilyInfo: ResolverTypeWrapper<FamilyInfo>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Locations: ResolverTypeWrapper<Locations>;
  Manufacturer: ResolverTypeWrapper<Manufacturer>;
  MedicationsPrice: ResolverTypeWrapper<MedicationsPrice>;
  Price: ResolverTypeWrapper<Price>;
  Query: ResolverTypeWrapper<{}>;
  SearchResults: ResolverTypeWrapper<SearchResults>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  SubFamily: ResolverTypeWrapper<SubFamily>;
  SubFamilyInfo: ResolverTypeWrapper<SubFamilyInfo>;
  SubFamilyWithManufacturer: ResolverTypeWrapper<SubFamilyWithManufacturer>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Establishment: Establishment;
  Family: Family;
  FamilyInfo: FamilyInfo;
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  Locations: Locations;
  Manufacturer: Manufacturer;
  MedicationsPrice: MedicationsPrice;
  Price: Price;
  Query: {};
  SearchResults: SearchResults;
  String: Scalars['String']['output'];
  SubFamily: SubFamily;
  SubFamilyInfo: SubFamilyInfo;
  SubFamilyWithManufacturer: SubFamilyWithManufacturer;
};

export type EstablishmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Establishment'] = ResolversParentTypes['Establishment']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  commercialName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  establishmentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  establishmentTypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  idEstablishment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['Locations'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ubigeo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FamilyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Family'] = ResolversParentTypes['Family']> = {
  family?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  idFamily?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FamilyInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['FamilyInfo'] = ResolversParentTypes['FamilyInfo']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  family?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subFamilies?: Resolver<Array<ResolversTypes['SubFamilyInfo']>, ParentType, ContextType>;
  totalConcentrations?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  totalFractions?: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  totalPharmaceuticalFormGroup?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  totalPharmaceuticalFormName?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Locations'] = ResolversParentTypes['Locations']> = {
  department?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  district?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  province?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ManufacturerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Manufacturer'] = ResolversParentTypes['Manufacturer']> = {
  idManufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  titularName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MedicationsPriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['MedicationsPrice'] = ResolversParentTypes['MedicationsPrice']> = {
  establishment?: Resolver<ResolversTypes['Establishment'], ParentType, ContextType>;
  family?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  idExtracted?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  idSubFamily?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prices?: Resolver<Array<Maybe<ResolversTypes['Float']>>, ParentType, ContextType>;
  subFamily?: Resolver<ResolversTypes['SubFamilyWithManufacturer'], ParentType, ContextType>;
  suggestion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updateAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Price'] = ResolversParentTypes['Price']> = {
  establishment?: Resolver<ResolversTypes['Establishment'], ParentType, ContextType>;
  family?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  idExtracted?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prices?: Resolver<Array<ResolversTypes['Float']>, ParentType, ContextType>;
  subFamily?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  suggestion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updateAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  allMedicationPrices?: Resolver<Array<ResolversTypes['MedicationsPrice']>, ParentType, ContextType>;
  getMedicationPrices?: Resolver<Array<ResolversTypes['MedicationsPrice']>, ParentType, ContextType, RequireFields<QueryGetMedicationPricesArgs, 'department' | 'medication' | 'province'>>;
  getMedicationsFromFamily?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryGetMedicationsFromFamilyArgs, 'family'>>;
  getSearchResults?: Resolver<ResolversTypes['SearchResults'], ParentType, ContextType, RequireFields<QueryGetSearchResultsArgs, 'medication'>>;
  medicationPrices?: Resolver<Array<ResolversTypes['MedicationsPrice']>, ParentType, ContextType, RequireFields<QueryMedicationPricesArgs, 'department' | 'medication' | 'province'>>;
};

export type SearchResultsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResults'] = ResolversParentTypes['SearchResults']> = {
  allConcentrations?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  allFamilies?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  allFractions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  allPharmaceuticalFormGroup?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  allPharmaceuticalFormName?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  allSubFamilies?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  familiesWithSubFamilies?: Resolver<Array<ResolversTypes['FamilyInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubFamilyResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubFamily'] = ResolversParentTypes['SubFamily']> = {
  concentration?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  family?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fractions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  group?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  idFamily?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  idSubFamily?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pharmaceuticalFormGroup?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pharmaceuticalFormGroupCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pharmaceuticalFormName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subFamily?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalActivePrinciple?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubFamilyInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubFamilyInfo'] = ResolversParentTypes['SubFamilyInfo']> = {
  concentrations?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  fractions?: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  pharmaceuticalFormGroup?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  pharmaceuticalFormName?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  subFamily?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubFamilyWithManufacturerResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubFamilyWithManufacturer'] = ResolversParentTypes['SubFamilyWithManufacturer']> = {
  concentration?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  family?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fractions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  group?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  idFamily?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  idManufacturer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  idSubFamily?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  manufacturer?: Resolver<ResolversTypes['Manufacturer'], ParentType, ContextType>;
  pharmaceuticalFormGroup?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pharmaceuticalFormGroupCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pharmaceuticalFormName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subFamily?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalActivePrinciple?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Establishment?: EstablishmentResolvers<ContextType>;
  Family?: FamilyResolvers<ContextType>;
  FamilyInfo?: FamilyInfoResolvers<ContextType>;
  Locations?: LocationsResolvers<ContextType>;
  Manufacturer?: ManufacturerResolvers<ContextType>;
  MedicationsPrice?: MedicationsPriceResolvers<ContextType>;
  Price?: PriceResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SearchResults?: SearchResultsResolvers<ContextType>;
  SubFamily?: SubFamilyResolvers<ContextType>;
  SubFamilyInfo?: SubFamilyInfoResolvers<ContextType>;
  SubFamilyWithManufacturer?: SubFamilyWithManufacturerResolvers<ContextType>;
};

