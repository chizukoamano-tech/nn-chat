'use strict';
// 一番下を表示
window.addEventListener('load', () => {
  window.scrollTo(0, document.body.scrollHeight);
});

//エンターキーとCtrlキー（MacはCommandキー）を押していたら送信
const formElemnt = document.forms['message-form'];
const textareaElement = formElemnt.elements['content'];
textareaElement.addEventListener('keydown', (event) => {
  // 送信キーを押したら
  if(isPressedSubmitKey(event)){
    // キーボード入力をキャンセルして送信
    event.preventDefault();
    formElemnt.submit();
  }
});

// 送信キーを押しているか判定
function isPressedSubmitKey(event) {
  if (event.key !== 'Enter'){
    return false;
  }
  if (event.ctrlKey) {
    return true;
  }
  // MacのCommandキーはmetKeyという名前
  if (event.metaKey) {
    return true;
  }
}
// ツールチップの有効化
const tooltipTriggerElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');
tooltipTriggerElements.forEach((tooltipTriggerElement) => {
  new bootstrap.Tooltip(tooltipTriggerElement);
});