// Datepicker の部分は代替ライブラリを使用することを推奨します。以下は概念的な置き換え
// jQuery UI Datepicker を使用しない場合は、Flatpickr や Pikaday などを検討してください。

// HTML要素を直接操作
let element = document.getElementById('datepicker');
element.insertAdjacentHTML('beforebegin', '<div style="top:0px;" class="date-picker-div" id="datepicker_rev"></div>');
element.insertAdjacentHTML('beforebegin', '<div id="time_list"></div>');

defineTimeInputs();
element.remove();

function defineTimeInputs() {
    const div = document.getElementById('time_list');
    const times = [280, 300, 320, 340, 360];
    times.forEach((top) => {
        div.insertAdjacentHTML('beforeend', `<input style="top:${top}px;" class="date-picker-div" type="text">`);
    });
}

// Datepicker の実装例（Flatpickr 使用の場合）
document.addEventListener('DOMContentLoaded', function () {
    const datepicker = document.getElementById('datepicker_rev');
    flatpickr(datepicker, {
        dateFormat: 'm/d(D)',
        defaultDate: new Date(),
        minDate: new Date(),
        maxDate: new Date().fp_incr(365), // 12 months
        locale: {
            weekdays: {
                shorthand: ['日', '月', '火', '水', '木', '金', '土'],
                longhand: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
            },
            months: {
                shorthand: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                longhand: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            },
        },
        onChange: function (selectedDates, dateStr) {
            handleDateSelect(dateStr);
        },
    });
});

function handleDateSelect(dateText) {
    let timeList = [];
    const timeContainer = document.getElementById('time_list');

    for (const input of timeContainer.children) {
        if (input.value.trim() !== '') {
            timeList.push(input.value.trim());
        }
    }

    let message = timeList.length === 0
        ? `${dateText}\n`
        : timeList.map((time) => `${dateText} ${time}～\n`).join('');

    const kouho = document.getElementById('kouho');
    kouho.value = kouho.value ? kouho.value + message : message;
}
