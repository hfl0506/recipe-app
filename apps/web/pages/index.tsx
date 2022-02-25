import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Table from '../components/table';

export function Index() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes([
      {
        key: 1,
        title: 'Best Grilled Chicken Breast',
        content:
          "Grilled chicken breasts can be the epitome of boring. Too often they're dried out or rubbery. But when soaked in a super-quick marinade — with balsamic, brown sugar, and dried thyme — you're guaranteed deliciousness.",
      },
      {
        key: 2,
        title: 'Instant Pot Chicken Breasts',
        content:
          "Golden and speckled with herbs on the outside, juicy and tender on the inside: Is this not everything you want for dinner? If you're busy running around the house doing other things, this is the perfect recipe to make tonight. With just 10 minutes of hands-on time, these chicken breasts practically cook themselves. It's also a meal preppers dream! Make a bunch of tender chicken breasts, and use them throughout the week with different dishes.",
      },
    ]);
  }, []);
  return (
    <div className="">
      <Search />
      {recipes?.length > 0 && (
        <div className="w-full h-screen flex flex-col items-center">
          {recipes.map((recipe) => (
            <Table data={recipe} key={recipe.key} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Index;
