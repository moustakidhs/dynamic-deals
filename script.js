var megaDealsContainer = document.querySelector('.mega-deals-container')
var bfMegaDeals = {
    deal01: {
    startCount: '2024-03-10T18:00:00',
    endCount: '2024-03-11T17:59:59',
    stock: true,
    preLaunchImage: "./images/pre-launch-01.png",
    countDownImage: "./images/launch-01.png",
    launchImage: "./images/promo-01.png",
    url: "/link-01",
    },
    deal02: {
    startCount: '2024-03-11T18:00:00',
    endCount: '2024-03-12T17:55:59',
    stock: true,
    preLaunchImage: "./images/pre-launch-02.png",
    countDownImage: "./images/launch-02.png",
    launchImage: "./images/promo-02.png",
    url: "/link-02",
    },
    deal03: {
    startCount: '2024-03-12T18:00:00',
    endCount: '2024-03-13T17:59:59',
    stock: true,
    preLaunchImage: "./images/pre-launch-03.png",
    countDownImage: "./images/launch-03.png",
    launchImage: "./images/promo-03.png",
    url: "/link-03",
    },
    deal04: {
    startCount: '2024-03-13T18:00:00',
    endCount: '2024-03-14T17:59:59',
    stock: true,
    preLaunchImage: "./images/pre-launch-04.png",
    countDownImage: "./images/launch-04.png",
    launchImage: "./images/promo-04.png",
    url: "/link-04",
    },
    deal05: {
        startCount: '2024-03-14T18:00:00',
        endCount: '2024-03-15T17:59:59',
    stock: true,
    preLaunchImage: "./images/pre-launch-05.png",
    countDownImage: "./images/launch-05.png",
    launchImage: "./images/promo-05.png",
    url: "/link-05",
    },
    deal06: {
        startCount: '2024-03-15T18:00:00',
        endCount: '2024-03-16T17:59:59',
    stock: true,
    preLaunchImage: "./images/pre-launch-06.png",
    countDownImage: "./images/launch-06.png",
    launchImage: "./images/promo-06.png",
    url: "/link-06",
    },

};
Object.values(bfMegaDeals).forEach(val => {
    currentDay = new Date();
    todayDate = new Date(currentDay.getFullYear(),currentDay.getMonth(),currentDay.getDate(),currentDay.getHours(),currentDay.getMinutes(),currentDay.getSeconds())
    varStart = new Date(val.startCount);
    varEnd = new Date(val.endCount);
    

    console.log(varEnd.getTime() < todayDate.getTime() , varEnd.getTime() > todayDate.getTime());

    var container = document.createElement('article');
    var url = document.createElement('a');
    var section = document.createElement('div');
    var timer = document.createElement('div');

    // release the promo (concatenate image and link)
    if(varEnd.getTime() < todayDate.getTime()){
        container.classList.add('mega-deal');
        url.setAttribute("href", val.url);
        url.innerHTML = `<img src="${val.launchImage}" class="mega-deal-image" alt="" draggable="false" loading="lazy" width="" height="">`;
        container.append(url)
        megaDealsContainer.append(container)
        

      // launch the promo for the current day (concatenate image and timer)
    }else if(varStart.getTime() < todayDate.getTime() & varEnd.getTime() > todayDate.getTime()){
        container.classList.add('mega-deal','flexed-asset');
        section.classList.add('cd-section-img');
        section.innerHTML = `<img src="${val.countDownImage}" class="mega-deal-image" alt="" draggable="false" loading="lazy" width="" height="">`;
        container.append(section)
        timer.setAttribute("id", 'timer');
        container.appendChild(timer);
        setTimer(varEnd.getTime())
        megaDealsContainer.append(container)

        // preLaunch (create only the image)
    }else{
        container.classList.add('mega-deal');
        section.classList.add('section-img');
        section.innerHTML = `<img src="${val.preLaunchImage}" class="mega-deal-image" alt="" draggable="false" loading="lazy" width="" height="">`;
        container.append(section)
        megaDealsContainer.append(container)
    }

});


// this is the countdown counter
function setTimer(countDownDate){
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countDownforTheOffer = ` 
                <div class="offer-countdown-timer">
                    <div class="hours">
                        <div class="title">${hours}</div>
                        <div class="caption">Ώρες</div>
                    </div>
                    <div>:</div>
                    <div class="seconds">
                        <div class="title">${minutes}</div>
                        <div class="caption">Λεπτά</div>
                    </div>
                    <div>:</div>
                    <div class="minutes">
                        <div class="title">${seconds}</div>
                        <div class="caption">Δευτ/πτα</div>
                    </div>
                </div>
            `;
        
        document.getElementById("timer").innerHTML = countDownforTheOffer;
        // check if lunchtime has passed
        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".offer-countdown-timer").innerHTML = "Unlocked";
        }
        }, 1000);
} 