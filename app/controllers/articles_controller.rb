class ArticlesController < ApplicationController
  def index

      @articles = Article.all

    end

  def show
    @article = Article.find(params[:id])
  end

  def new
    @article = Article.new
  end

  def edit
    #@article = current_user
    #@user = User.find(params[:user_id])
    #@article = @user.articles.create(article_params)
    @article = Article.find(params[:id])
      #redirect_to article_path(@article)
end

  def create
    @article = Article.new(article_params)
    #ask if i need this line to solve my problem
    @article.user_id = session[:user_id]
    if @article.save
    redirect_to @article
    else
      render 'new'
    end
  end

  def update
  @article = Article.find(params[:id])

  if @article.update(article_params)
    redirect_to @article
  else
    render 'edit'
  end
end

def destroy
  @article = Article.find(params[:id])
  @article.destroy

  redirect_to articles_path
end

  private
  def article_params
    params.require(:article).permit(:title, :text)
  end

end
