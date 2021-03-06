class WelcomeController < ApplicationController
  def index
  end

  def services
    @services = BackEnd::Service.active(I18n.locale).order('id ASC')
  end

  def news
    @events = BackEnd::Event.active(I18n.locale).order('id ASC')
    # render :under_construction
  end

  def aboutus
    @page = BackEnd::Page.where(locale: I18n.locale.to_s).first
  end
end
