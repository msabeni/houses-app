# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
House.create([
    { 
      name: "Phil Studio Apartment",
      image_url: "https://www.pexels.com/photo/house-lights-turned-on-106399/"
    }, 
    { 
      name: "Romtech Apartment ",
      image_url: "https://www.pexels.com/photo/beautiful-wooden-houses-with-lawns-1643389/"
    },
    { 
      name: "Easy Pack",
      image_url: "https://www.pexels.com/photo/white-2-storey-house-near-trees-1115804/" 
    }, 
    { 
      name: "Alma Home",
      image_url: "https://www.pexels.com/photo/lighted-beige-house-1396132/" 
    }, 
    { 
      name: "Jamhuri Homes",
      image_url: "https://www.pexels.com/photo/house-on-green-landscape-against-sky-314937/" 
    }, 
    { 
      name: "Becky Apartments",
      image_url: "https://www.pexels.com/photo/multicolored-wooden-houses-2374652/" 
    }
  ])

  reviews = Review.create([
    {
        title: "New House",
        description: "I had a lovely time",
        score: 5,
        house: houses.first
    },
        {
        title: "Old House",
        description: "I had a bad time",
        score: 1,
        house: houses.first
    }
])