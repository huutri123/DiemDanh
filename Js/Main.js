$(document).ready(function() {
    const days = 30; // Số ngày trong tháng
    const rewards = [
        'reward1.png', 'reward2.png', 'reward3.png', // Thay thế bằng đường dẫn tới các hình ảnh phần thưởng
        // ...
    ];

    // Tạo các ô điểm danh
    for (let i = 1; i <= days; i++) {
        $('#calendar').append(`
            <div class="col day" data-day="${i}">
                <img src="${rewards[i % rewards.length]}" alt="Reward">
                <span>Ngày ${i}</span>
            </div>
        `);
    }

    // Xử lý sự kiện điểm danh
    $('#check-in').click(function() {
        const today = new Date().getDate();
        $(`.day[data-day="${today}"]`).addClass('checked');
    });
});
