'use client';

// https://github.com/xiaotiandada/blog/issues/94 - 참고
import { ChangeEvent, memo, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
// 동적으로 tailwind 사용하자
// https://velog.io/@arthur/Tailwind-CSS-%EC%97%90%EC%84%9C-%EB%8F%99%EC%A0%81%EC%9C%BC%EB%A1%9C-%ED%81%B4%EB%9E%98%EC%8A%A4-%ED%95%A0%EB%8B%B9%ED%95%98%EA%B8%B0
function ThemeSwitch() {
    const [mounted, setMounted] = useState<boolean>(false);
    const { theme, themes, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    // shift됨
    if (!mounted) {
        return (
            <div className="mr-7 grid">
                <label htmlFor="HeadlineAct" className="text-center">
                    <span className="badge badge-ghost">themes</span>
                </label>

                <select
                    name="HeadlineAct"
                    id="HeadlineAct"
                    className="block w-32 rounded-lg bg-slate-900 p-2.5 text-sm text-purple-50"
                >
                    <option className="text-center font-bold">
                        {/*Loading!*/}
                    </option>
                </select>
            </div>
        );
    }
    // 임시 방책
    return (
        <div className="mr-7 grid">
            <label htmlFor="HeadlineAct" className="text-center">
                <span className="badge badge-ghost">themes</span>
            </label>

            <select
                name="HeadlineAct"
                id="HeadlineAct"
                value={theme}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setTheme(e.target.value)
                }
                className="block w-32 rounded-lg bg-slate-900 p-2.5 text-sm text-purple-50"
            >
                {/*https://velog.io/@chyoon0512/React-map-%EC%82%AC%EC%9A%A9%EC%8B%9C-key-props%EB%A5%BC-%EB%B6%80%EC%97%AC%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0*/}
                {/*key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕는다. key는 element에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야한다.*/}
                {themes.map(
                    (
                        opt,
                        key, // eslint-disable-next-line react/jsx-key
                    ) => (
                        <option
                            key={key}
                            className="text-center font-bold"
                            value={opt}
                        >
                            {opt}
                        </option>
                    ),
                )}
            </select>
        </div>
    );
}

export default memo(ThemeSwitch);
