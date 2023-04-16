var moviesData = []
const tbody = document.getElementById("tbody")

document.getElementById('Language').addEventListener('change', function(e) {
    // Your function logic here
    var selectedOption = this.value; // Get the selected option value
    // Do something with the selected option value
    console.log(selectedOption);
    

    if(selectedOption == 'English'){
       const  movfilterData = moviesData.filter(movie => movie.original_language === 'English');
        console.log(movfilterData)
        

        return;
    }
    


  });
  


const fetch = async () =>{
    await axios.get('data.json').then((res)=>{
        console.log(res.data)
        moviesData.push(res.data)
        console.log(moviesData)
        for(let i=0;i<40;i++) {
            tbody.innerHTML += `
            <tr>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900"> ${moviesData[0][i].id}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                        <img class="h-10 w-10 rounded-full"
                             src="https://via.placeholder.com/40"
                             alt="Movie Poster">
                    </div>
                    <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                            ${moviesData[0][i].title}
                        </div>
                        <div class="text-sm text-gray-500 w-[150px] overflow-x-hidden">
                            ${moviesData[0][i].overview}
                        </div>
                        <div class="text-sm text-gray-500">
                           ${moviesData[0][i].runtime}
                        </div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">2023</div>
            </td>
        </tr>
            
            `
        }

    }).catch((error)=>{
        console.log(error)
    })
}

fetch()


