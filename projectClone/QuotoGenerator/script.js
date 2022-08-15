const $ = tag => document.querySelector(tag);

const quoteContainer = $('#quote-contaniner');
const quoteText = $('#quote');
const authorText = $('#author');
const twitterBtn = $('#twitter');
const newQuoteBtn = $('#new-quote');
const loader = $('#loader');

let apiQuotes = [];

// 로딩 회전 보이기
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
// 로딩 회전 제거
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// 새 인용구 보이기
function newQuote() {
  loading();
  // 배열에서 랜덤 인용구 고르기
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // 저자 영역이 비었으면 'Unknown'으로 대체하기
  if (!quote.author) {
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = quote.author;
  }

  // 스타일 결정할 인용구 길이 확인
  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
  // 인용구 설정
  quoteText.textContent = quote.text;
  // 로딩 숨기기
  complete();
}

// API로 부터 인용구 얻기
async function getQuotes() {
  loading();
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    console.log(error);
  }
}

// 인용구 트윗하기
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
  window.open(twitterUrl, '_blank');
}

// 이벤트 리스너
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// 인용구 얻기 실행
getQuotes();
