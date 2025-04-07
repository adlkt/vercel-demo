document.getElementById('callApi').addEventListener('click', async () => {
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = '加载中...';

  try {
    const response = await fetch('/api/hello');
    const data = await response.json();
    resultDiv.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    resultDiv.textContent = `错误: ${error.message}`;
  }
});