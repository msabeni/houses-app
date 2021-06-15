class House < ApplicationRecord
    has_many :reviews

    before_create :slugify

    def slugify
      #self.slug = name.downcase.gsub(' ', '-')
      self.slug = name.parameterize #parameterize method should handle both downcasing characters and replacing spaces with hyphens for us
    end

    def avg_score
        return 0 unless reviews.size.positive?
    
        reviews.average(:score).to_f.round(2)
      end
end
