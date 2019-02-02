const olaApp = {};

olaApp.init = function (){

    let installStat = document.getElementById('statOne').innerText;
    let installStatTwo = document.getElementById('statTwo').innerText;
    let installStatThree = document.getElementById('statThree').innerText;
    let installs = installStat - 56;
    let installsTwo = installStatTwo - 40;
    let installsThree = installStatThree - 500;

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

olaApp.init();
