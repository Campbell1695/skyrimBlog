class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def edit
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)    # Not the final implementation!
    if @user.save
      log_in @user
      redirect_to @user
    else
      render 'new'
    end
  end

  def update
  @user = User.find(params[:id])

  if @user.update(user_params)
    redirect_to @user
  else
    render 'edit'
  end
end

def destroy
  @user = User.find(params[:id])
  @user.destroy

  redirect_to root_path
end

  private

    def user_params
      params.require(:user).permit(:name, :email, :password,
                                   :password_confirmation)
    end
end

#Link to delete user_path(@user) method delete
