import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ReactionService } from './reaction.service';
import { CommentModel } from './models/comment.model';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import type { CommentCreateInput, CommentUpdateInput } from './inputs/comment.input';
import { Auth } from 'src/auth/decorators/auth.decorator';
import type { Role } from 'prisma/generated/prisma/enums';
import { ToggleLikeResponse } from './models/toggle-like.response';

@Resolver()
export class ReactionResolver {
  constructor(private readonly reactionService: ReactionService) { }

  @Mutation(() => CommentModel)
  @Auth()
  createComment(
    @CurrentUser('id') userId: string,
    @Args('input') input: CommentCreateInput
  ) {
    return this.reactionService.createComment(userId, input)
  }

  @Mutation(() => CommentModel)
  @Auth()
  updateComment(
    @CurrentUser('id') userId: string,
    @CurrentUser('role') userRole: Role,
    @Args('commendId') commendId: string,
    @Args('input') input: CommentUpdateInput
  ) {
    return this.reactionService.updateComment(
      userId,
      commendId,
      input,
      userRole
    )
  }

  @Mutation(() => CommentModel)
  @Auth()
  deleteComment(
    @CurrentUser('id') userId: string,
    @CurrentUser('role') userRole: Role,
    @Args('commendId') commendId: string
  ) {
    return this.reactionService.deleteComment(
      userId,
      commendId,
      userRole
    )
  }

  @Mutation(() => ToggleLikeResponse)
  @Auth()
  toggleLike(
    @CurrentUser('id') userId: string,
    @Args('recipeId') recipeId: string
  ) {
    return this.reactionService.toggleLike(
      userId,
      recipeId
    )
  }


}
