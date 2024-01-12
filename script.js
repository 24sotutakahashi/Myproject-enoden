// ドキュメントが完全に読み込まれた後に実行されるイベントリスナー
document.addEventListener('DOMContentLoaded', function () {
    // スタート用のボタン要素を取得
    const startBuildingButtons = document.getElementById('startBuildingButtons');
    const startBuildingButton = document.getElementById('startBuildingButton');
    const startBuilding2Button = document.getElementById('startBuilding2Button');
    const startBuilding3Button = document.getElementById('startBuilding3Button');
    const startBuilding4Button = document.getElementById('startBuilding4Button');
    const startBuilding5Button = document.getElementById('startBuilding5Button');



    const startFloorButtons = document.getElementById('startFloorButtons');
    const startRoomButtons = document.getElementById('startRoomButtons');
    const startFloorBackButton = document.getElementById('startFloorBackButton');
    const startBackButton = document.getElementById('startBackButton');
    const startRooms = startRoomButtons.querySelectorAll('.room');

    // ゴール用のボタン要素を取得
    const goalBuildingButtons = document.getElementById('goalBuildingButtons');
    const goalBuildingButton = document.getElementById('goalBuildingButton');
    const goalBuilding2Button = document.getElementById('goalBuilding2Button');
    const goalBuilding3Button = document.getElementById('goalBuilding3Button');
    const goalBuilding4Button = document.getElementById('goalBuilding4Button');


    const goalFloorButtons = document.getElementById('goalFloorButtons');
    const goalRoomButtons = document.getElementById('goalRoomButtons');
    const goalFloorBackButton = document.getElementById('goalFloorBackButton');
    const goalBackButton = document.getElementById('goalBackButton');
    const goalRooms = goalRoomButtons.querySelectorAll('.room');

    // 選択された教室と建物を記録する変数
    let startRoomSelected = '';
    let goalRoomSelected = '';
    let selectedBuilding = '';
    let selectedBuildingForGoal = '';


    // ボタンセットを表示する関数
    function showButtonContainer(container) {
        container.style.display = 'flex'; // コンテナを表示状態に変更
        setTimeout(() => container.classList.add('active'), 10); // 少し遅れて 'active' クラスを追加し、アニメーションを開始
    }

    // ボタンセットを非表示にする関数
    function hideButtonContainer(container) {
        container.classList.remove('active'); // 'active' クラスを削除し、アニメーションを開始
        setTimeout(() => container.style.display = 'none', 500); // アニメーション終了後に非表示に設定
    }

    // 選択されたボタンのスタイルを更新する関数
    function updateSelectedButton(selectedButton, allButtons) {
        allButtons.forEach(button => {
            button.classList.remove('selected'); // 他のボタンから 'selected' クラスを削除
        });
        selectedButton.classList.add('selected'); // 選択されたボタンに 'selected' クラスを追加
    }

    // 初期状態で建物選択ボタンセットを表示
    showButtonContainer(startBuildingButtons);
    showButtonContainer(goalBuildingButtons);


    // スタート用の、イベントリスナー


    ////////////////////////////
    // 各建物ごとに表示する階を定義するオブジェクト
    // 例: 1号館は1階から3階まであるので、'1': ['1', '2', '3'] と定義
    const buildingFloors = {
        '1': ['1', '2', '3'],
        '2': ['1', '2', '3', '4'],
        '3': ['1', '2', '3'],
        '4': ['1', '2', '3', '4'],
        '5': ['1', '2', '3', '4', '5']
    };

    function updateFloorButtons(building) {
        // 選択された建物の階を取得
        const floorsToShow = buildingFloors[building];

        // 階ボタンの表示を更新
        document.querySelectorAll('#startFloorButtons .floor').forEach(button => {
            // 文字列に変換
            const floorValue = String(button.dataset.floor);

            if (floorsToShow.includes(floorValue)) {
                button.style.display = 'block';
            } else {
                button.style.display = 'none';
            }
        });
    }

    // イベントリスナーを建物のボタンに追加
    startBuildingButton.addEventListener('click', () => {
        selectedBuilding = '1';
        hideButtonContainer(startBuildingButtons);
        setTimeout(() => {
            updateFloorButtons(selectedBuilding);
            showButtonContainer(startFloorButtons);
        }, 500);
    });

    startBuilding2Button.addEventListener('click', () => {
        selectedBuilding = '2';
        hideButtonContainer(startBuildingButtons);
        setTimeout(() => {
            updateFloorButtons(selectedBuilding);
            showButtonContainer(startFloorButtons);
        }, 500);
    });

    startBuilding3Button.addEventListener('click', () => {
        selectedBuilding = '3';
        hideButtonContainer(startBuildingButtons);
        setTimeout(() => {
            updateFloorButtons(selectedBuilding);
            showButtonContainer(startFloorButtons);
        }, 500);
    });




    startBuilding4Button.addEventListener('click', () => {
        selectedBuilding = '4';
        hideButtonContainer(startBuildingButtons);
        setTimeout(() => {
            updateFloorButtons(selectedBuilding);
            showButtonContainer(startFloorButtons);
        }, 500);
    });


    // イベントリスナーを建物のボタンに追加
    startBuilding5Button.addEventListener('click', () => {
        selectedBuilding = '5';
        hideButtonContainer(startBuildingButtons);
        setTimeout(() => {
            updateFloorButtons(selectedBuilding);
            showButtonContainer(startFloorButtons);
        }, 500);
    });



    // (表示されている)スタート用階ボタンのイベントリスナー
    startFloorButtons.addEventListener('click', function (event) {
        if (event.target.classList.contains('floor')) {
            const floor = event.target.dataset.floor; // クリックされた階を取得
            const building = selectedBuilding; // 選択された建物を取得
            hideButtonContainer(startFloorButtons); // 現在のボタンセットを非表示に
            setTimeout(() => {
                startRooms.forEach(room => {
                    // 各教室に対して、選択された建物と階に基づいて表示を制御
                    if (room.dataset.floor === floor && room.dataset.building === building) {
                        room.style.display = 'block'; // 条件に一致する教室を表示
                    } else {
                        room.style.display = 'none'; // 条件に一致しない教室を非表示
                    }
                });
                showButtonContainer(startRoomButtons); // 教室選択ボタンセットを表示
            }, 500);
        }
    });

    // スタート用建物選択に戻るボタンのイベントリスナー
    startFloorBackButton.addEventListener('click', () => {
        hideButtonContainer(startFloorButtons); // 現在の階選択ボタンセットを非表示に
        setTimeout(() => showButtonContainer(startBuildingButtons), 500); // 建物選択ボタンセットを再表示
    });

    // スタート用階選択に戻るボタンのイベントリスナー
    startBackButton.addEventListener('click', () => {
        hideButtonContainer(startRoomButtons); // 現在の教室選択ボタンセットを非表示に
        setTimeout(() => showButtonContainer(startFloorButtons), 500); // 階選択ボタンセットを再表示
    });


    // スタート用教室ボタンのイベントリスナー
    startRoomButtons.addEventListener('click', function (event) {
        if (event.target.classList.contains('room')) {
            startRoomSelected = event.target.textContent; // 選択された教室を記録
            updateSelectedButton(event.target, startRooms); // 選択されたボタンのスタイルを更新
            updateResult(); // 結果表示を更新
        }
    });


    // ゴール用の、イベントリスナー
    // ゴール用建物ボタンのイベントリスナー
    function updateFloorButtonsForgoal(building) {
        // 選択された建物の階を取得
        const floorsToShow = buildingFloors[building];

        // 階ボタンの表示を更新
        document.querySelectorAll('#goalFloorButtons .floor').forEach(button => {
            // 文字列に変換
            const floorValue = String(button.dataset.floor);

            if (floorsToShow.includes(floorValue)) {
                button.style.display = 'block';
            } else {
                button.style.display = 'none';
            }
        });
    }

    goalBuildingButton.addEventListener('click', () => {
        selectedBuildingForGoal = '1';
        hideButtonContainer(goalBuildingButtons);
        setTimeout(() => {
            updateFloorButtonsForgoal(selectedBuildingForGoal);
            showButtonContainer(goalFloorButtons);
        }, 500);
    });

    goalBuilding2Button.addEventListener('click', () => {
        selectedBuildingForGoal = '2';
        hideButtonContainer(goalBuildingButtons);
        setTimeout(() => {
            updateFloorButtonsForgoal(selectedBuildingForGoal);
            showButtonContainer(goalFloorButtons);
        }, 500);
    });

    goalBuilding3Button.addEventListener('click', () => {
        selectedBuildingForGoal = '3';
        hideButtonContainer(goalBuildingButtons);
        setTimeout(() => {
            updateFloorButtonsForgoal(selectedBuildingForGoal);
            showButtonContainer(goalFloorButtons);
        }, 500);
    });

    goalBuilding4Button.addEventListener('click', () => {
        selectedBuildingForGoal = '4';
        hideButtonContainer(goalBuildingButtons);
        setTimeout(() => {
            updateFloorButtonsForgoal(selectedBuildingForGoal);
            showButtonContainer(goalFloorButtons);
        }, 500);
    });




    // ゴール用階ボタンのイベントリスナー
    goalFloorButtons.addEventListener('click', function (event) {
        if (event.target.classList.contains('floor')) {
            const floor = event.target.dataset.floor; // クリックされた階を取得
            const building = selectedBuildingForGoal; // 選択された建物を取得(goal用)
            hideButtonContainer(goalFloorButtons); // 現在のボタンセットを非表示に
            setTimeout(() => {
                goalRooms.forEach(room => {
                    // 各教室に対して、選択された建物と階に基づいて表示を制御
                    if (room.dataset.floor === floor && room.dataset.building === building) {
                        room.style.display = 'block'; // 条件に一致する教室を表示
                    } else {
                        room.style.display = 'none'; // 条件に一致しない教室を非表示
                    }
                });
                showButtonContainer(goalRoomButtons); // 教室選択ボタンセットを表示
            }, 500);
        }
    });








    // ゴール用戻るボタンのイベントリスナー
    goalFloorBackButton.addEventListener('click', () => {
        hideButtonContainer(goalFloorButtons); // 現在の階選択ボタンセットを非表示に
        setTimeout(() => showButtonContainer(goalBuildingButtons), 500); // 建物選択ボタンセットを再表示
    });
    goalBackButton.addEventListener('click', () => {
        hideButtonContainer(goalRoomButtons); // 現在の教室選択ボタンセットを非表示に
        setTimeout(() => showButtonContainer(goalFloorButtons), 500); // 階選択ボタンセットを再表示
    });

    // ゴール用教室ボタンのイベントリスナー
    goalRoomButtons.addEventListener('click', function (event) {
        if (event.target.classList.contains('room')) {
            goalRoomSelected = event.target.textContent; // 選択された教室を記録
            updateSelectedButton(event.target, goalRooms); // 選択されたボタンのスタイルを更新
            updateResult(); // 結果表示を更新
        }
    });

    // 結果を更新する関数
    function updateResult() {
        if (startRoomSelected && goalRoomSelected) {
            const resultText = `${startRoomSelected}教室から${goalRoomSelected}教室までのルート`; // 結果テキストを生成
            document.getElementById('result').textContent = resultText; // 結果テキストを表示要素に設定
            document.getElementById('result').style.display = 'block'; // 結果表示要素を表示
        }
    }
});