// const baseUrl = 'http://127.0.0.1:3000';
const baseUrl = 'https://js-json-data.onrender.com';
const headers = {
  headers: {
    Authorization: localStorage.getItem('accessToken')
  }
};
// 時間戳格式
function timer (ms) {
  const times = new Date(ms);
  const day = times.toLocaleDateString();
  const h = times.getHours() < 10 ? `0${times.getHours()}` : times.getHours();
  const m = times.getMinutes() < 10 ? `0${times.getMinutes()}` : times.getMinutes();
  const s = times.getSeconds() < 10 ? `0${times.getSeconds()}` : times.getSeconds();
  return `${day.replace(/\//g, '-')} ${h}:${m}:${s}`;
};

// 用戶登入超過1小時
function clearLogin () {
  localStorage.clear();
  Swal.fire({
    icon: 'error',
    title: '登入過期!',
    text: '請重新登入'
  });
  setTimeout(() => {
    document.location.href = '/login';
  }, 2000);
};
