import { Resolver } from '@nestjs/graphql';
import { RecipesService } from './recipes.service';

@Resolver()
export class RecipesResolver {
  constructor(private readonly recipesService: RecipesService) {}

   @Query(() => [IngredientModel], {
      name: 'ingredients',
    })
    @Auth(Role.ADMIN)
    getAll() {
      return this.ingredientsService.getAll();
    }
  
    @Query(() => IngredientModel, {
      name: 'ingredientById',
    })
    @Auth(Role.ADMIN)
    getById(
      @Args('id') id: string,
    ) {
      return this.ingredientsService.getById(id);
    }
  
    @Mutation(() => IngredientModel)
    @Auth(Role.ADMIN)
    createIngredient(
      @Args('input') input: IngredientCreateInput,
    ) {
      return this.ingredientsService.create(input);
    }
  
    @Mutation(() => IngredientModel)
    @Auth(Role.ADMIN)
    updateIngredient(
      @Args('id') id: string,
      @Args('input') input: IngredientCreateInput,
    ) {
      return this.ingredientsService.update(id, input);
    }
  
    @Mutation(() => IngredientModel)
    @Auth(Role.ADMIN)
    deleteIngredientById(
      @Args('id') id: string,
    ) {
      return this.ingredientsService.deleteById(id);
    }
    
}
