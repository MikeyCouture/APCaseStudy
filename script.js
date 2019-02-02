const olaApp = {};

olaApp.init = function (){

    window.addEventListener("scroll", () => {
        const scrollable = document.documentElement.offsetHeight - document.documentElement.clientHeight;
        const scrolled = Math.ceil(window.scrollY);

        if (scrolled === scrollable){
            runStats();
        };
    });

    function runStats(){
    // Grabbing the span inner text and setting new install variables
        let installStat = document.getElementById('statOne').innerText;
        let installStatTwo = document.getElementById('statTwo').innerText;
        let installStatThree = document.getElementById('statThree').innerText;
        let installs = 0;
        let installsTwo = 0;
        let installsThree = 0;

        // A function that iterates on the page up to a given number
        function countingCost(){
            if (installs <= installStat){
                setTimeout(function(){
                    document.getElementById('statOne').innerText = installs;
                    installs = installs+1;
                    countingCost();
                }, 40);
            };
        };

        function countingInstalls() {
            if (installsTwo <= installStatTwo) {
                setTimeout(function () {
                    document.getElementById('statTwo').innerText = installsTwo;
                    installsTwo = installsTwo + 1;
                    countingInstalls();
                }, 40);
            };
        };

        function countingReach() {
            if (installsThree <= installStatThree) {
                setTimeout(function () {
                    document.getElementById('statThree').innerText = installsThree;
                    installsThree = installsThree + 10;
                    countingReach();
                }, 40);
            };
        };

        countingCost();
        countingInstalls();
        countingReach();

    };

};

olaApp.init();
