var app = new Vue({
    el: '#app',
    data: {
        width: 0,
        length: 0,
        height: 0,
        unit: 'cm',
    },
    computed: {
        volume: function () {
            return (this.width * this.length * this.height);
        },
        litres: function () {
            if (this.unit === 'inch') {
                return this.volume * 0.0163871;
            } else if (this.unit === 'mm') {
                return this.volume / 10000;
            }
            return this.volume / 1000;
        },
        gallons: function () {
            return this.litres * 0.264172;
        },
        kilos: function () {
            return this.litres;
        },
        pounds: function () {
            return this.kilos * 2.20462;
        }
    },
    directives: {
        select: {
            twoWay: true,

            bind: function () {
                $(this.el).material_select();

                var self = this;

                $(this.el).on('change', function () {
                    self.set($(self.el).val());
                });
            },

            update: function (newValue, oldValue) {
                $(this.el).val(newValue);
            },

            unbind: function () {
                $(this.el).material_select('destroy');
            }
        }
    }
});

$(document).ready(function () {
    $('select').material_select();
});