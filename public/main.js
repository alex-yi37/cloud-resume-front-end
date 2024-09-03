function fetchViewCountData() {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        ok: true,
        json: function () {
          return { data: { viewCount: 25 }, statusCode: 200 };
        },
      });
    }, 1000);
  });
}

async function main() {
  const viewCountEl = document.querySelector("#view-count");

  try {
    const response = await fetch(
      "https://damuevfdlf.execute-api.us-east-1.amazonaws.com/default/updateViewCount"
    );

    if (!response.ok) {
      throw new Error("Problem fetching data, please try again later");
    }

    const responseData = await response.json();
    viewCountEl.textContent = responseData.data.viewCount;
  } catch (e) {
    console.error(e);
    viewCountEl.textContent = "Please try again later";
  }
}

main();
