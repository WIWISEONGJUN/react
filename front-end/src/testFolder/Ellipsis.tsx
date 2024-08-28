import * as React from 'react';

type EllipsisType = {
    children : React.ReactElement | string
    className? : string
};

export const Ellipsis : React.FC<EllipsisType> = ({className, children}) => {
    // children 이 태그 하나짜리 올바른 리액트 컴포넌트인지 확인
    const isSingleReactElement = (child : React.ReactNode) : child is React.ReactElement => {
        return React.isValidElement(child) && typeof child.props.children === 'string'
    };

    // Ellipsis 처리용 스타일
    const styles: React.CSSProperties = {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        width: '100%',
    };

    if (typeof children === 'string') {
        // children 이 string 이면 p 태그를 붙이고 style 변경과 툴팁 생성
        return <p className={className} style={styles} title={children}>{children}</p>;
    }else if(isSingleReactElement(children)){
        // isSingleReactElement 체크 완료되면 style 변경과 툴팁 생성
        const props = children.props
        return React.cloneElement(children,{...props, style : styles, title: props.children})
    }else { 
        // 조건에 부합하지 않을경우 그대로 출력
        return <>{children}</>;
    }
};