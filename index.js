const rawData = {
    content1: {__html: `
        <div id="mentor" class="description show">
        <h4>TOPIC: AI/ Machine Learning/ Deep Learning/ Large Language Models/ GenAI</h4>
        <p>Mục tiêu chung:</p>
        <ul>
            <li>Phát triển kỹ năng và tư duy <b style="color: red;">LẬP TRÌNH</b>.</li>
            <li>Cung cấp kiến thức <b style="color: red;">TOÁN HỌC</b> vào xử lý và phân tích dữ liệu.</li>
            <li>Làm việc với <b style="color: red;">SIDE PROJECT</b> thực tế trong suốt quá trình hướng dẫn.</li>
            <li>Hướng dẫn <b style="color: red;">TRAINING/ TESTING/ DEPLOY</b> AI models trên private datasets.</li>
        </ul>

        <p>Mục tiêu <b style="color: red;">cá nhân hóa:</b></p>
        <p style="font-style: italic;">Kiến thức sẽ được điều chỉnh đề phù hợp với background và định hướng của từng cá nhân.</p>
        <ul>
            <li>
            <b style="color: red;">ĐIỀU CHỈNH</b> kiến thức phù hợp với nền tảng và định hướng của mentee.
            </li>
            <li>
            Xây dựng nền móng <b style="color: red;">NGHIÊN CỨU</b> AI papers và kỹ năng <b style="color: red;">PHÂN TÍCH</b> giải quyết vấn đề bằng AI.
            </li>
            <li>
            Hiểu rõ <b style="color: red;">THUẬT TOÁN (CORE)</b> của AI models để phát triển trong các công ty product (Singapore/US/Germany).
            </li>
            <li>
            Cập nhật framework theo <b style="color: red;">XU HƯỚNG</b> của thị trường.
            </li>
        </ul>
        </div>
    `,
    },
    content2: [
        "Kiến <bold>thức</bold> nền tảng về lập trình",
        "Ngôn ngữ lập trình cho AI",
        "Thiết kế thuật toán AI và Machine Learning",
        "Kỹ năng xử lý dữ liệu",
        "Phát triển mô hình học máy",
        "Lập trình và áp dụng học sâu (Deep Learning)",
        "Xử lý lỗi và tối ưu hóa hiệu suất",
    ],
    content3: [
        "Giới thiệu về các công nghệ mới và xu hướng trong phát triển phần mềm",
        "Triển khai AI và Machine Learning vào dự án thực tế",
        "Sử dụng công nghệ AR/VR trong dự án thực tế",
        "Phát triển ứng dụng với công nghệ AI đạo đức",
        "Ứng dụng công nghệ thực tế ảo hỗn hợp",
    ]

}

const [popupContent1, popupContent2, popupContent3] = Object.keys(rawData).map((k) => {
    if (typeof rawData[k] === "object" && rawData[k].__html) {
      return `<div class="px-8">${rawData[k].__html}</div>`;
    } else {
      return (
        `<div class="px-8">
          <ul class="text-left list-disc">
            ${rawData[k].map((it) => `<li class="text-base">${it}</li>`).join("")}
          </ul>
        </div>`
      );
    }
  });

// const [popupContent1, popupContent2, popupContent3] = Object.keys(rawData).map((k) => `
//     <div class="px-8">
//           <ul class="text-left list-disc">
//             ${rawData[k].map((it) => `<li class="text-base">${it}</li>`).join('')}
//         </ul>
//     </div>
// `);


const purposeIDs = {
    purpose1: {
        id: "purpose1",
        content: popupContent1
    },
    purpose2: { id: "purpose2", content: popupContent2 },
    purpose3: { id: "purpose3", content: popupContent3 },
}

const popupConfig = {
    backgroundColor: "var(--primary-foreground)",
    textColor: "var(--text)",
    titleColor: "var(--text)",
    closeColor: "var(--gray)",
};


const popupTitle = `<p style = "font-size: 24px;"> Danh mục đào tạo</>
  <hr class="w-full h-[1px] mt-4 bg-divider opacity-35 border-none" />`;

const purpose1 = document.getElementById(purposeIDs.purpose1.id);
const purpose2 = document.getElementById(purposeIDs.purpose2.id);
const purpose3 = document.getElementById(purposeIDs.purpose3.id);
const methodElm = document.getElementById("method");

console.log(window);

const [purpose1Popup, purpose2Popup, purpose3Popup] = Object.keys(purposeIDs).map(k => {
    return new Popup({
        id: purposeIDs[k].id,
        title: popupTitle,
        content: purposeIDs[k].content,
        ...popupConfig
    });
})

// EVENT TRIGGER
purpose1 && purpose1.addEventListener('click', () => {
    purpose1Popup.show();
});
purpose2 && purpose2.addEventListener('click', () => {
    purpose2Popup.show();
});

purpose3 && purpose3.addEventListener('click', () => {
    purpose3Popup.show();
});

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {

            if (!methodElm) return;

            if (entry.isIntersecting) {
                entry.target && entry.target.classList.add(`animate-fade-in`);
                entry.target && entry.target.classList.remove(`opacity-0`);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });


    document.querySelectorAll('.fade-in-content').forEach(element => {
        observer.observe(element);
    });
});