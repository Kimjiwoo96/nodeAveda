import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

function Shop_p({
    conmargin,
    h4class
}) {


    useEffect(() => {
        // Kakao 지도 SDK 로드
        const script = document.createElement('script');
        script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 APP KEY를 사용하세요';
        document.head.appendChild(script);

        script.onload = () => {
            // Kakao.maps를 전역으로 사용할 수 있도록 설정
            window.kakao.maps.load(() => {
                // 지도를 표시할 div와 지도 옵션으로 지도를 생성
                const mapContainer = document.getElementById('map');
                const mapOption = {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                    level: 3 // 지도의 확대 레벨
                };

                // 지도를 생성합니다
                const map = new window.kakao.maps.Map(mapContainer, mapOption);
            });
        };

        return () => {
            // 컴포넌트가 언마운트될 때 스크립트 제거
            document.head.removeChild(script);
        };
    }, []); // 컴포넌트가 마운트될 때 한 번만 실행



    return (
        <div style={{ marginTop: conmargin }}>
            <h4 className={h4class}>매장위치 조회</h4>
            <div>
                <label htmlFor="avedaMap">매장검색</label>
                <select name="avedaMap" id="avedaMap">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div id="map" style={{ width: '100%', height: '350px', border: "1px solid red" }}></div>;

        </div>
    )
}

export default Shop_p
