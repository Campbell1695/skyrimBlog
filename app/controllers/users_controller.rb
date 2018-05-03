class UsersController < ApplicationController

  def create
    @user = User.new(user_params)    # Not the final implementation!
    if @user.save
      log_in @user
      redirect_to @user
    else
      render 'new'
    end
  end

  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
  end

  private

    def user_params
      params.require(:user).permit(:name, :email, :password,
                                   :password_confirmation)
    end
end
