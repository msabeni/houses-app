module Api
    module V1
        class HousesController < ApplicationController
            def index
                houses = House.all
        
                render json: HouseSerializer.new(houses).serialized_json
            end
            def show
                house = House.find_by(slug: params[:slug])
        
                render json: HouseSerializer.new(houses).
            end
            def create
                house = House.new(house_params)
        
                if house.save
                  render json: HouseSerializer.new(house).serialized_json
                else
                  render json: { error: house.errors.messages }, status: 422
                end
            end
            def update
                housee = House.find_by(slug: params[:slug])
        
                if house.update(airline_params)
                  render json: HouseSerializer.new(house).serialized_json
                else
                  render json: { error: house.errors.messages }, status: 422
                end
            end
            def destroy
                house = House.find_by(slug: params[:slug])
        
                if house.destroy
                  head :no_content
                else
                  render json: { errors: house.errors.messages }, status: 422
                end
            end
        

            private

            def house_params
              params.require(:house).permit(:name, :image_url)
            end

        end
    end
end
  