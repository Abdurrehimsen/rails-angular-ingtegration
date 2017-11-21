class SessionCtrlController < ApplicationController
	skip_before_action :verify_authenticity_token

	def authenticate 
		user = User.find_by_email(params[:email]) 
		
		if user.valid_password?(params[:password]) 
			render json: { user: user.email, status: :success }
		else 
			render json: { error: "invalid credientals" }, status: :unauthorized 
		end 
	end 
end
