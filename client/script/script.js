const roomCont = document.querySelector('.room-cont')

const fetchRooms = async () => {
    try {
        const response = await fetch('http://localhost:8000/room/all')
        const json = await response.json()
        return json.rooms
    } catch (error) {
        console.error('Error fetching rooms:', error)
    }
}

fetchRooms().then(rooms => {
    const roomList = rooms.map(room => {
        console.log(room)
        if (!room.active) {
            return
        }
        return `
            <div class="items">
                <div class="image">
                    <img src="${room.img}" alt="">
                </div>
                <div class="text">
                    <h2>Superior Rooms</h2>
                    <div class="rate flex">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <p>${room.caption}</p>
                    <div class="button flex">
                        <button class="primary-btn">BOOK NOW</button>
                        <h3>₱${room.rate} <span> <br> Per Night </span> </h3>
                    </div>
                </div>
            </div>
        `
    }).join('')
    roomCont.innerHTML = roomList
})
