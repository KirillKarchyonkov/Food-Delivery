/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type ActivityLevel =
  | 'ACTIVE'
  | 'LIGHT'
  | 'MODERATE'
  | 'SEDENTARY'
  | 'VERY_ACTIVE';

export type AuthInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken: Scalars['String']['output'];
  user: UserModel;
};

export type BodyMeasurementModel = {
  __typename?: 'BodyMeasurementModel';
  activityLevel?: Maybe<ActivityLevel>;
  armCm?: Maybe<Scalars['Int']['output']>;
  chestCm?: Maybe<Scalars['Int']['output']>;
  goalWeightKg?: Maybe<Scalars['Int']['output']>;
  heightCm?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  natritionGoal?: Maybe<NutritionGoal>;
  thighCm?: Maybe<Scalars['Int']['output']>;
  waistCm?: Maybe<Scalars['Int']['output']>;
  weightKg?: Maybe<Scalars['Int']['output']>;
};

export type BodyMeasurementUpdateInput = {
  activityLevel?: InputMaybe<ActivityLevel>;
  armCm?: InputMaybe<Scalars['Int']['input']>;
  chestCm?: InputMaybe<Scalars['Int']['input']>;
  goalWeightKg?: InputMaybe<Scalars['Int']['input']>;
  heightCm?: InputMaybe<Scalars['Int']['input']>;
  natritionGoal?: InputMaybe<NutritionGoal>;
  thighCm?: InputMaybe<Scalars['Int']['input']>;
  waistCm?: InputMaybe<Scalars['Int']['input']>;
  weightKg?: InputMaybe<Scalars['Int']['input']>;
};

export type CommentCreateInput = {
  content: Scalars['String']['input'];
  recipeId: Scalars['String']['input'];
};

export type CommentModel = {
  __typename?: 'CommentModel';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CommentUpdateInput = {
  content: Scalars['String']['input'];
};

export type Difficulty =
  | 'EASY'
  | 'HARD'
  | 'MEDIUM';

export type Gender =
  | 'FEMALE'
  | 'MALE';

export type IngredientCreateInput = {
  content: Scalars['String']['input'];
  iconUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
};

export type IngredientModel = {
  __typename?: 'IngredientModel';
  createdAt: Scalars['DateTime']['output'];
  defaultUnit: Unit;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: CommentModel;
  createIngredient: IngredientModel;
  createRecipe: RecipeModel;
  deleteComment: CommentModel;
  deleteIngredientById: IngredientModel;
  deleteRecipeById: RecipeModel;
  login: AuthResponse;
  logout: Scalars['Boolean']['output'];
  register: AuthResponse;
  toggleLike: ToggleLikeResponse;
  updateComment: CommentModel;
  updateIngredient: IngredientModel;
  updateProfile: UserModel;
  updateRecipe: RecipeModel;
};


export type MutationCreateCommentArgs = {
  input: CommentCreateInput;
};


export type MutationCreateIngredientArgs = {
  input: IngredientCreateInput;
};


export type MutationCreateRecipeArgs = {
  input: RecipeCreateInput;
};


export type MutationDeleteCommentArgs = {
  commendId: Scalars['String']['input'];
};


export type MutationDeleteIngredientByIdArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteRecipeByIdArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  data: AuthInput;
};


export type MutationRegisterArgs = {
  data: AuthInput;
};


export type MutationToggleLikeArgs = {
  recipeId: Scalars['String']['input'];
};


export type MutationUpdateCommentArgs = {
  commendId: Scalars['String']['input'];
  input: CommentUpdateInput;
};


export type MutationUpdateIngredientArgs = {
  id: Scalars['String']['input'];
  input: IngredientCreateInput;
};


export type MutationUpdateProfileArgs = {
  data: UserUpdateCustomInput;
};


export type MutationUpdateRecipeArgs = {
  id: Scalars['String']['input'];
  input: RecipeCreateInput;
};

export type NutritionFactModel = {
  __typename?: 'NutritionFactModel';
  carbohydrates: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  fats: Scalars['Float']['output'];
  fiber: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  proteins: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type NutritionFactUpdateInput = {
  carbohydrates: Scalars['Float']['input'];
  fats: Scalars['Float']['input'];
  fiber: Scalars['Float']['input'];
  proteins: Scalars['Float']['input'];
};

export type NutritionGoal =
  | 'MAINTAINANCE'
  | 'MUSCLE_GAIN'
  | 'WEIGHT_LOSS';

export type OrderCreateInput = {
  items: Array<OrderItemInput>;
};

export type OrderItemInput = {
  quantity?: Scalars['Float']['input'];
  recipeIngredientId: Scalars['ID']['input'];
};

export type OrderItemModel = {
  __typename?: 'OrderItemModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  price: Scalars['String']['output'];
  quantity?: Maybe<Scalars['Int']['output']>;
  recipeIngredient: RecipeIngredientModel;
  recipeIngredientId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderModel = {
  __typename?: 'OrderModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  items: Array<OrderItemModel>;
  orderId: Scalars['String']['output'];
  status: OrderStatus;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type OrderStatus =
  | 'CANCELLED'
  | 'COMPLETED'
  | 'PENDING'
  | 'PROCESSING';

export type ProfileModel = {
  __typename?: 'ProfileModel';
  age?: Maybe<Scalars['Int']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  fullname: Scalars['String']['output'];
  gender?: Maybe<Gender>;
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProfileUpdateInput = {
  age?: InputMaybe<Scalars['Int']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
};

export type Query = {
  __typename?: 'Query';
  adminRecipes: Array<RecipeModel>;
  createOrder: OrderModel;
  ingredientById: IngredientModel;
  ingredients: Array<IngredientModel>;
  myOrders: Array<OrderModel>;
  newTokens: AuthResponse;
  profile: UserModel;
  recipeById: RecipeModel;
  recipeBySlug: RecipeModel;
  recipes: Array<RecipeModel>;
  users: Array<UserModel>;
};


export type QueryCreateOrderArgs = {
  input: OrderCreateInput;
};


export type QueryIngredientByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryRecipeByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryRecipeBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryRecipesArgs = {
  input: RecipesQueryInput;
};

export type RecipeCreateInput = {
  calories: Scalars['Int']['input'];
  cookingTime: Scalars['Int']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  difficulty: Difficulty;
  ingredients?: InputMaybe<Array<RecipeIngredientInput>>;
  nutritionFact?: InputMaybe<NutritionFactUpdateInput>;
  recipeSteps?: InputMaybe<Array<RecipeStepInput>>;
  slug: Scalars['String']['input'];
  tags?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RecipeIngredientInput = {
  ingredientId: Scalars['ID']['input'];
  quantity: Scalars['Float']['input'];
  unit: Unit;
};

export type RecipeIngredientModel = {
  __typename?: 'RecipeIngredientModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  ingredient: IngredientModel;
  quantity: Scalars['Float']['output'];
  unit: Unit;
  updatedAt: Scalars['DateTime']['output'];
};

export type RecipeModel = {
  __typename?: 'RecipeModel';
  author: UserModel;
  authorId: Scalars['String']['output'];
  calories: Scalars['Int']['output'];
  cookingTime: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  difficulty: Difficulty;
  id: Scalars['ID']['output'];
  likes?: Maybe<Scalars['Int']['output']>;
  nutritionInfos?: Maybe<NutritionFactModel>;
  recipeIngredients?: Maybe<Array<RecipeIngredientModel>>;
  recipeSteps?: Maybe<Array<RecipeStepModel>>;
  slug: Scalars['String']['output'];
  tags?: Maybe<Array<RecipeTagModel>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type RecipeStepInput = {
  description: Scalars['String']['input'];
  order: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type RecipeStepModel = {
  __typename?: 'RecipeStepModel';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  order: Scalars['Int']['output'];
  recipe: RecipeModel;
  recipeId: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type RecipeTagModel = {
  __typename?: 'RecipeTagModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type RecipesQueryInput = {
  limit?: Scalars['Int']['input'];
  page?: Scalars['Int']['input'];
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

export type Role =
  | 'ADMIN'
  | 'USER';

export type ToggleLikeResponse = {
  __typename?: 'ToggleLikeResponse';
  liked: Scalars['Boolean']['output'];
};

export type Unit =
  | 'CLOVES'
  | 'CUP'
  | 'GRAM'
  | 'KILOGRAM'
  | 'LITER'
  | 'MILLILITER'
  | 'PIECE'
  | 'TABLESPOON'
  | 'TEASPOON';

export type UserModel = {
  __typename?: 'UserModel';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  measurements?: Maybe<BodyMeasurementModel>;
  profile?: Maybe<ProfileModel>;
  role: Role;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserUpdateCustomInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  measurements?: InputMaybe<BodyMeasurementUpdateInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<ProfileUpdateInput>;
};

export type LoginMutationVariables = Exact<{
  data: AuthInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', accessToken: string, user: { __typename?: 'UserModel', email: string } } };

export type RegisterMutationVariables = Exact<{
  data: AuthInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'AuthResponse', accessToken: string, user: { __typename?: 'UserModel', email: string } } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;