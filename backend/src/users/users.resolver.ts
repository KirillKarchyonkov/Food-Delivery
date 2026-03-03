import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'prisma/generated/enums';
import { UserModel } from './models/user.model';
import { UserUpdateCustomInput } from './inputs/user-update.input';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) { }

  @Query(() => UserModel, { name: 'profile' })
  @Auth()
  getProfile(@CurrentUser('id') id: string) {
    return this.usersService.findById(id)
  }

  @Mutation(() => UserModel)
  @Auth()
  updateProfile(
    @CurrentUser('id') id: string,
    @Args('data') input: UserUpdateCustomInput
  ) {
    return this.usersService.updateProfile(id, input)
  }


  // test
  @Query(() => [UserModel], { name: 'users' })
  @Auth(Role.ADMIN)
  async getUsers() {
    return this.usersService.findAll()
  }

}
