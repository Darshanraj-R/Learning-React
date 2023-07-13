export function updateData(list, searchValue) {
    
    if(searchValue === "" ){
        return list;
    }
    list = list.filter((restaurant) => restaurant.data.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return list;
  }