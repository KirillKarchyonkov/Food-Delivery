import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RecipesService } from './recipes.service';
import { Role } from 'prisma/generated/graphql/prisma';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { AdminRecipesService } from './admin-recipes.service';
import { RecipeModel } from './models/recipe.model';
import type { RecipeCreateInput } from './inputs/recipe.input';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';

@Resolver()
export class RecipesResolver {
  constructor(
    private readonly recipesService: RecipesService,
    private readonly adminRecipesService: AdminRecipesService
  ) {}

   @Query(() => [RecipeModel], {
      name: 'recipes',
    })
    getAll() {
      return this.recipesService.getAll();
    }

   @Query(() => RecipeModel, {
      name: 'recipeBySlug',
    })
    getBySlug(
      @Args('slug') slug: string,
    ) {
      return this.recipesService.getBySlug(slug);
    }

   @Query(() => [RecipeModel], {
      name: 'admin-recipes',
    })
    @Auth(Role.ADMIN)
    getAllAdmin() {
      return this.adminRecipesService.getAll();
    }
  
    @Query(() => RecipeModel, {
      name: 'recipeById',
    })
    @Auth(Role.ADMIN)
    getById(
      @Args('id') id: string,
    ) {
      return this.adminRecipesService.getById(id);
    }
  
    @Mutation(() => RecipeModel)
    @Auth(Role.ADMIN)
    createRecipe(
      @CurrentUser('id') authorId: string,
      @Args('input') input: RecipeCreateInput,
    ) {
      return this.adminRecipesService.create(authorId, input);
    }
  
    @Mutation(() => RecipeModel)
    @Auth(Role.ADMIN)
    updateRecipe(
      @Args('id') id: string,
      @Args('input') input: RecipeCreateInput,
    ) {
      return this.adminRecipesService.update(id, input);
    }
  
    @Mutation(() => RecipeModel)
    @Auth(Role.ADMIN)
    deleteRecipeById(
      @Args('id') id: string,
    ) {
      return this.adminRecipesService.deleteById(id);
    }
    
}
