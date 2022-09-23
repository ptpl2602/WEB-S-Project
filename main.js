function toast({
    title = '', 
    message = '', 
    type = 'info', 
    duration = 3000
}) { 
    const main = document.getElementById('toast')
    if(main) {
        const toast = document.createElement('div')

        //Auto remove toast
        const autoRemoveID = setTimeout(function () {
                            main.removeChild(toast);
                            }, duration+1000);

        //Remove toast when click
        toast.onclick = function(e) {
            if(e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveID);
            }
        }
        //-----------------------------
        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-circle-exclamation'
        };
        const icon = icons[type];
        const delay = (duration/1000).toFixed(2);

        toast.classList.add('toast', `toast--${type}`)

        toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `
                <div class="toast__icon">
                    <i class="${icon}"></i>
                </div>
                <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <div class="toast__msg">${message}</div>
                </div>
                <div class="toast__close">
                    <i class="fa-solid fa-xmark"></i>
                </div>
        `;
        main.appendChild(toast);
    }
}

function showSuccessToast() {
    toast({
        title: 'Thành công!',
        message: 'Bạn đã đăng nhập thành công, tiếp tục với công việc của bạn.',
        type: 'success',
        duration: 5000      //hiện bao lâu thì ẩn
    });
}

function showInfoToast() {
    toast({
        title: 'Thông tin',
        message: 'Bạn cần điền đầy đủ thông tin trước khi mua khóa học.',
        type: 'info',
        duration: 3000      //hiện bao lâu thì ẩn
    });
}

function showWarningToast() {
    toast({
        title: 'Cảnh báo!',
        message: 'Khóa học này chưa mở, xin hãy chọn khóa học khác.',
        type: 'warning',
        duration: 5000      //hiện bao lâu thì ẩn
    });
}