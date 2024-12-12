let element = document.getElementById('datepicker');
element.insertAdjacentHTML('beforebegin', '<div style="top:0px;" class="date-picker-div" id="datepicker_rev"></div>');
element.insertAdjacentHTML('beforebegin', '<div id="time_list"></div>');

let div = document.getElementById('time_list');
div.insertAdjacentHTML('beforeend', '<input style="top:280px;" class="date-picker-div" type="text">');
div.insertAdjacentHTML('beforeend', '<input style="top:300px;" class="date-picker-div" type="text">');
div.insertAdjacentHTML('beforeend', '<input style="top:320px;" class="date-picker-div" type="text">');
div.insertAdjacentHTML('beforeend', '<input style="top:340px;" class="date-picker-div" type="text">');
div.insertAdjacentHTML('beforeend', '<input style="top:360px;" class="date-picker-div" type="text">');
element.remove();


$(function() {
    $("#datepicker_rev").datepicker({
        dateFormat: 'm/d(DD)',
        firstDay: 0,
        yearSuffix: '年',
        showMonthAfterYear: true,
        monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        dayNames: ['日', '月', '火', '水', '木', '金', '土'],
        dayNamesMin: ['日', '月', '火', '水', '木', '金', '土'],
        minDate: new Date(),
        maxDate: '+12m',
        hideIfNoPrevNext: true,
        onSelect: function (dateText, inst) {
            let message;
            let time_list = [];
            let time = document.getElementById("time_list");
            for(let i = 0; i<time.childElementCount; i++){
                if(time.children[i].value === "") continue;
                time_list.push(time.children[i].value);
            }

            
            if(time_list.length === 0) {
                message = dateText + "\n";
            }
            else {
                message = "";
                for(let i = 0; i<time_list.length; i++){
                    message += dateText + " " + time_list[i] + "～\n";
                }
            }

            let nowText = $('#kouho').val();
            if (nowText === "") {
                $("#kouho").val(message);
            }
            else {
                $("#kouho").val(nowText + message);
            }
            
        }
    });
});
