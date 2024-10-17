// DATA & CONFIG
let themeMode = "light";
let isDarkMode = themeMode === "dark";

const rawData = {
    content1: `
        <ul class="list-disc text-left">
            <li class="text-base">Phát triển kỹ năng và tư duy <b class="text-error">LẬP TRÌNH</b>.</li>
            <li class="text-base">Cung cấp kiến thức <b class="text-error">TOÁN HỌC</b> vào xử lý và phân tích dữ liệu.</li>
            <li class="text-base">Làm việc với <b class="text-error">SIDE PROJECT</b> thực tế trong suốt quá trình hướng dẫn.</li>
            <li class="text-base">Hướng dẫn <b class="text-error">TRAINING/ TESTING/ DEPLOY</b> AI models trên private datasets.</li>
        </ul>

        <p class="italic text-lg">Mục tiêu cá nhân hóa:</b></p>
        <p class="italic text-lg">(Kiến thức sẽ được điều chỉnh đề phù hợp với background và định hướng của từng cá nhân)</p>
        <ul class="list-disc text-left">
            <li class="text-base">
            <b class="text-error">ĐIỀU CHỈNH</b> kiến thức phù hợp với nền tảng và định hướng của mentee.
            </li>
            <li class="text-base">
            Xây dựng nền móng <b class="text-error">NGHIÊN CỨU</b> AI papers và kỹ năng <b class="text-error">PHÂN TÍCH</b> giải quyết vấn đề bằng AI.
            </li>
            <li class="text-base">
            Hiểu rõ <b class="text-error">THUẬT TOÁN (CORE)</b> của AI models để phát triển trong các công ty product (Singapore/US/Germany).
            </li>
            <li class="text-base">
            Cập nhật framework theo <b class="text-error">XU HƯỚNG</b> của thị trường.
            </li>
        </ul>
    `,
    content2:
        `
         <ul class="list-disc text-left">
            <li class="text-base"><b class="text-error">Kiến thức</b> nền tảng về lập trình</li>
            <li class="text-base">Ngôn ngữ lập trình cho AI</li>
            <li class="text-base">Thiết kế thuật toán AI và Machine Learning</li>
            <li class="text-base">Kỹ năng xử lý dữ liệu</li>
            <li class="text-base">Phát triển mô hình học máy</li>
            <li class="text-base">Lập trình và áp dụng học sâu (Deep Learning)</li>
            <li class="text-base">Xử lý lỗi và tối ưu hóa hiệu suất</li>
        </ul>

    `,
    content3: `
        <ul class="list-disc text-left">
            <li class="text-base">Giới thiệu về các công nghệ mới và xu hướng trong phát triển phần mềm</li>
            <li class="text-base">Triển khai AI và Machine Learning vào dự án thực tế</li>
            <li class="text-base">Sử dụng công nghệ AR/VR trong dự án thực tế</li>
            <li class="text-base">Phát triển ứng dụng với công nghệ AI đạo đức</li>
            <li class="text-base">Ứng dụng công nghệ thực tế ảo hỗn hợp</li>
        </ul>
    `

}

const [popupContent1, popupContent2, popupContent3] = Object.keys(rawData).map((k) => {
    return `
        <div class="px-8">
            ${rawData[k]}
        </div>
    `
});


const purposeIDs = {
    purpose1: {
        id: "purpose1",
        content: popupContent1
    },
    purpose2: { id: "purpose2", content: popupContent2 },
    purpose3: { id: "purpose3", content: popupContent3 },
}

const baseConfig = {
    // fixedHeight: true,
    // heightMultiplier: 0.8,
    // height: "600px"
}

let popupConfig = {
    backgroundColor: "var(--text)",
    textColor: "var(--primary)",
    titleColor: "var(--primary)",
    closeColor: "var(--primary-foreground)",
    ...baseConfig
};


const popupTitle = `<p class="text-xl"> Danh mục đào tạo</>
  <hr class="h-[1.5px] w-full my-4 mx-auto bg-divider opacity-35 border-none" />`;


// QUERY ELEMENTS
const purpose1 = document.getElementById(purposeIDs.purpose1.id);
const purpose2 = document.getElementById(purposeIDs.purpose2.id);
const purpose3 = document.getElementById(purposeIDs.purpose3.id);
const methodElm = document.getElementById("method");
const toggleModeElm = document.getElementById("change-mode");
const headerBgElm = document.getElementById("header-bg");
const targetBgElm = document.getElementById("target-bg");
const themeIconElm = document.getElementById("theme-icon");
const popupBodyElms = document.getElementsByClassName("popup-body");
const popupContentElms = document.getElementsByClassName("popup-content");


// EVENT TRIGGER
const configPopupStyle = () => {
    const bodyElmArr = popupBodyElms ? Array.from(popupBodyElms) : [];
    const contentElmArr = popupContentElms ? Array.from(popupContentElms) : [];

    if (bodyElmArr.length) {
        bodyElmArr.forEach((elm) => elm.classList.add("overflow-x-auto"))
    }

    if (contentElmArr.length) {
        contentElmArr.forEach((elm) => elm.classList.add("max-h-[350px]", "lg:max-h-[600px]"))
    }
}

purpose1 && purpose1.addEventListener('click', () => {
    const purpose1Popup = new Popup({
        id: purposeIDs.purpose1.id,
        title: popupTitle,
        content: purposeIDs.purpose1.content,
        ...popupConfig,
    });

    purpose1Popup.show();
    configPopupStyle();
});

purpose2 && purpose2.addEventListener('click', () => {
    const purpose2Popup = new Popup({
        id: purposeIDs.purpose2.id,
        title: popupTitle,
        content: purposeIDs.purpose2.content,
        ...popupConfig,
    });

    purpose2Popup.show();
    configPopupStyle();
});

purpose3 && purpose3.addEventListener('click', () => {
    const purpose3Popup = new Popup({
        id: purposeIDs.purpose3.id,
        title: popupTitle,
        content: purposeIDs.purpose3.content,
        ...popupConfig,
    });

    purpose3Popup.show();
    configPopupStyle();
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

const changeDarkMode = () => {
    themeMode = "dark";
    document.documentElement.classList.add("dark");
    headerBgElm && headerBgElm.setAttribute("src", "./images/dark_header_bg.jpg");
    targetBgElm && targetBgElm.setAttribute("src", "./images/dark_target_bg.jpg")
    themeIconElm && themeIconElm.setAttribute("src", "./images/sun-icon.svg");

    popupConfig = {
        backgroundColor: "var(--primary-foreground)",
        textColor: "var(--text)",
        titleColor: "var(--text)",
        closeColor: "var(--gray)",
    };
}

const changeLightMode = () => {
    themeMode = "light";
    document.documentElement.classList.remove("dark");
    headerBgElm && headerBgElm.setAttribute("src", "./images/light_header_bg.jpg");
    targetBgElm && targetBgElm.setAttribute("src", "./images/light_target_bg.jpg");
    themeIconElm && themeIconElm.setAttribute("src", "./images/moon-icon.svg");


    popupConfig = {
        backgroundColor: "var(--text)",
        textColor: "var(--primary)",
        titleColor: "var(--primary)",
        closeColor: "var(--primary-foreground)",
    };

}

toggleModeElm && toggleModeElm.addEventListener('click', () => {
    themeMode === "dark" ? changeLightMode() : changeDarkMode();
});