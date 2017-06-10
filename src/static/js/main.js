var Clock = {

    init: function() {
        var second = 1000 * 1;
        var minute = 60 * second;
        var hour = 60 * minute;

        this.setSeconds();
        this.setMinutes();
        this.setHours();
    },
    setSeconds: function() {
        setInterval(() => {
            var secondHand = document.querySelector('.second-hand');
            var now = new Date();
            var seconds = now.getSeconds();
            var rotationDegrees = ((seconds / 60) * 360) + 90;    // offset from css to start from the top-center

            if (seconds == 0)
                secondHand.style.transition = `none`;

            if (seconds == 1)
                secondHand.style.transition = `all 0.05s`;

            secondHand.style.transform = `rotate(${rotationDegrees}deg)`;
        }, this.second);
    },

    setMinutes: function() {
        setInterval(() => {
            var minuteHand = document.querySelector('.min-hand');
            var now = new Date();
            var minutes = now.getMinutes();
            var rotationDegrees = ((minutes / 60) * 360) + 90;    // offset from css to start from the top-center

            if (minutes == 0)
                minuteHand.style.transition = `none`;

            if (minutes == 1)
                minuteHand.style.transition = `all 0.05s`;

            minuteHand.style.transform = `rotate(${rotationDegrees}deg)`;
        }, this.minute);
    },

    setHours: function() {
        setInterval(() => {
            var hourHand = document.querySelector('.hour-hand');
            var now = new Date();
            var hours = now.getHours();
            var rotationDegrees = ((hours / 12) * 360) + 90;    // offset from css to start from the top-center

            if (hours == 0)
                hourHand.style.transition = `none`;

            if (hours == 1)
                hourHand.style.transition = `all 0.05s`;

                hourHand.style.transform = `rotate(${rotationDegrees}deg)`;
        }, this.hour);
    }
};

Clock.init();
