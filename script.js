const olaApp = {};

olaApp.init = function (){

    // Grabbing the results stat div
    let allStats = document.querySelector(".results__content--stat");

    // Returning the position of stat div to see if it's in the viewport
    const isInViewport = function (elem) {
        let bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // listening for a scroll event
    let flag = true;
    function newFunc(){
        window.addEventListener("scroll", () => {
            if(flag){
                if (isInViewport(allStats)) {
                    newStat();
                    flag = false;
                };
            };
        });
    };

    newFunc();

    // Firing off the runStats once allStats is in the viewport
    function newStat(){
        runStats();
    };

    function runStats(){
        setTimeout(function(){
    // Grabbing the span inner text and setting new install variables
        let installStat = document.getElementById('statOne').innerText;
        let installStatTwo = document.getElementById('statTwo').innerText;
        let installStatThree = document.getElementById('statThree').innerText;
        let installs = 0;
        let installsTwo = 0;
        let installsThree = 0;

        // Iterates number on the page
        function countingCost(){
            if (installs <= installStat){
                setTimeout(function(){
                    document.getElementById('statOne').innerText = installs;
                    installs = installs + 1;
                    countingCost();
                }, 70);
            };
        };

        function countingInstalls() {
            if (installsTwo <= installStatTwo) {
                setTimeout(function () {
                    document.getElementById('statTwo').innerText = installsTwo;
                    installsTwo = installsTwo + 1;
                    countingInstalls();
                }, 80);
            };
        };

        function countingReach() {
            if (installsThree <= installStatThree) {
                setTimeout(function () {
                    document.getElementById('statThree').innerText = installsThree;
                    installsThree = installsThree + 10;
                    countingReach();
                }, 50);
            };
        };

        countingCost();
        countingInstalls();
        countingReach();

        }, 400);
    };

};

olaApp.init();
