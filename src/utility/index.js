import toast from "react-hot-toast";

// get all coffees from local storage
const getAllFavorites = () => {
    const all = localStorage.getItem("favorites");
    
    if(all){
        const favorites = JSON.parse(all);
        return favorites;
    }else{
        return [];
    }

}

// add a coffee to local storage
const addFavorite = (coffee) =>{
    const favorites = getAllFavorites();
    const isExist = favorites.find(item => item.id === coffee.id);
    if(isExist) return toast.error('Ase!');
    favorites.push(coffee);
    localStorage.setItem("favorites", JSON.stringify(favorites));

    toast.success('Successfully Added!');
}




export {addFavorite, getAllFavorites}