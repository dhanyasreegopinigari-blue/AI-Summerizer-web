const textarea = document.getElementById("textInput");
const count = document.getElementById("charCount");

if (textarea && count) {

```
textarea.addEventListener("input", () => {

    count.innerText = textarea.value.length;

});
```

}

const form = document.getElementById("summaryForm");

if (form) {

```
form.addEventListener("submit", () => {

    const spinner =
        document.getElementById("spinner");

    if (spinner) {

        spinner.style.display = "block";

    }

});
```

}

function copySummary() {

```
const text =
    document.getElementById(
        "summaryText"
    ).innerText;

navigator.clipboard.writeText(text);

alert(
    "Summary copied successfully!"
);
```

}
const wordCount =
document.getElementById(
"wordCount"
);

const readingTime =
document.getElementById(
"readingTime"
);

if(textarea){

textarea.addEventListener(
"input",
() => {

let words =
textarea.value
.trim()
.split(/\s+/)
.filter(
w => w.length > 0
);

if(wordCount){

wordCount.innerText =
words.length;

}

if(readingTime){

readingTime.innerText =
Math.max(
1,
Math.ceil(
words.length / 200
)
);

}

});

}
function downloadSummary(){

const text =
document.getElementById(
"summaryText"
).innerText;

const blob =
new Blob(
[text],
{
type:"text/plain"
}
);

const link =
document.createElement(
"a"
);

link.href =
URL.createObjectURL(
blob
);

link.download =
"summary.txt";

link.click();

}

function toggleTheme(){

document.body.classList.toggle(
"dark-mode"
);

}
function toggleTheme() {

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark")
    );
}

window.onload = function() {

    if (
        localStorage.getItem("theme")
        === "true"
    ) {

        document.body.classList.add(
            "dark"
        );
    }
};