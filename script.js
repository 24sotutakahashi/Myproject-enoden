// ドキュメントが完全に読み込まれた後に実行されるイベントリスナー
document.addEventListener('DOMContentLoaded', function () {
    // スタート用のボタン要素を取得
    // スタート用のボタン要素を取得
    const startBuildingButtons = document.getElementById('startBuildingButtons');

    const startBuildingButton = document.getElementById('startBuildingButton');
    const startBuilding2Button = document.getElementById('startBuilding2Button');
    const startBuilding3Button = document.getElementById('startBuilding3Button');
    const startBuilding4Button = document.getElementById('startBuilding4Button');
    const startBuilding5Button = document.getElementById('startBuilding5Button');
    const startBuilding6Button = document.getElementById('startBuilding6Button');
    const startBuilding7Button = document.getElementById('startBuilding7Button');
    const startBuilding8Button = document.getElementById('startBuilding8Button');
    const startBuilding9Button = document.getElementById('startBuilding9Button');
    const startBuilding10Button = document.getElementById('startBuilding10Button');
    const startBuilding11Button = document.getElementById('startBuilding11Button');
    const startBuilding12Button = document.getElementById('startBuilding12Button');
    const startBuilding13Button = document.getElementById('startBuilding13Button');
    const startBuilding14Button = document.getElementById('startBuilding14Button');
    const startBuilding15Button = document.getElementById('startBuilding15Button');
    const startBuilding16Button = document.getElementById('startBuilding16Button');
    const startBuilding17Button = document.getElementById('startBuilding17Button');
    const startBuilding18Button = document.getElementById('startBuilding18Button');
    const startBuilding19Button = document.getElementById('startBuilding19Button');
    const startBuilding20Button = document.getElementById('startBuilding20Button');




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
    const goalBuilding5Button = document.getElementById('goalBuilding5Button');
    const goalBuilding6Button = document.getElementById('goalBuilding6Button');
    const goalBuilding7Button = document.getElementById('goalBuilding7Button');
    const goalBuilding8Button = document.getElementById('goalBuilding8Button');
    const goalBuilding9Button = document.getElementById('goalBuilding9Button');
    const goalBuilding10Button = document.getElementById('goalBuilding10Button');
    const goalBuilding11Button = document.getElementById('goalBuilding11Button');
    const goalBuilding12Button = document.getElementById('goalBuilding12Button');
    const goalBuilding13Button = document.getElementById('goalBuilding13Button');
    const goalBuilding14Button = document.getElementById('goalBuilding14Button');
    const goalBuilding15Button = document.getElementById('goalBuilding15Button');
    const goalBuilding16Button = document.getElementById('goalBuilding16Button');
    const goalBuilding17Button = document.getElementById('goalBuilding17Button');
    const goalBuilding18Button = document.getElementById('goalBuilding18Button');
    const goalBuilding19Button = document.getElementById('goalBuilding19Button');
    const goalBuilding20Button = document.getElementById('goalBuilding20Button');



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
        "1": ["1", "2", "3"],
        "2": ["1", "2", "3", "4"],
        "3": ["1", "2", "3"],
        "4": ["1", "2", "3", "4"],
        "5": ["1", "2", "3", "4"],
        "6": ["1", "2", "3", "4", "5", "6"],
        "7": ["1", "2"],
        "8": ["1", "2", "3", "4", "5"],
        "9": ["1", "2", "3"],
        "10": ["1", "2", "3", "4", "5"],
        "11": ["1"], // 11号館は1階のみ
        "12": ["1"], // 12号館は1階のみ
        "13": ["1"], // 13号館は1階のみ
        "14": ["1"], // 14号館は1階のみ
        "15": ["1"], // 15号館は1階のみ
        "16": ["1"], // 16号館は1階のみ
        "17": ["1"], // 17号館は1階のみ
        "18": ["1", "2", "3"],
        "19": ["1"], // 19号館は1階のみ
        "20": ["1"],
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
    function addBuildingButtonListener(button, buildingNumber) {
        button.addEventListener('click', () => {
            selectedBuilding = buildingNumber;
            hideButtonContainer(startBuildingButtons);
            setTimeout(() => {
                updateFloorButtons(selectedBuilding);
                showButtonContainer(startFloorButtons);
            }, 500);
        });
    }
    // 各建物ボタンにリスナーを追加
    addBuildingButtonListener(startBuildingButton, '1');
    addBuildingButtonListener(startBuilding2Button, '2');
    addBuildingButtonListener(startBuilding3Button, '3');
    addBuildingButtonListener(startBuilding4Button, '4');
    addBuildingButtonListener(startBuilding5Button, '5');
    addBuildingButtonListener(startBuilding6Button, '6');
    addBuildingButtonListener(startBuilding7Button, '7');
    addBuildingButtonListener(startBuilding8Button, '8');
    addBuildingButtonListener(startBuilding9Button, '9');
    addBuildingButtonListener(startBuilding10Button, '10');
    addBuildingButtonListener(startBuilding11Button, '11');
    addBuildingButtonListener(startBuilding12Button, '12');
    addBuildingButtonListener(startBuilding13Button, '13');
    addBuildingButtonListener(startBuilding14Button, '14');
    addBuildingButtonListener(startBuilding15Button, '15');
    addBuildingButtonListener(startBuilding16Button, '16');
    addBuildingButtonListener(startBuilding17Button, '17');
    addBuildingButtonListener(startBuilding18Button, '18');
    addBuildingButtonListener(startBuilding19Button, '19');
    addBuildingButtonListener(startBuilding20Button, '20');




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




    function addGoalBuildingButtonListener(button, buildingNumber) {
        button.addEventListener('click', () => {
            selectedBuildingForGoal = buildingNumber;
            hideButtonContainer(goalBuildingButtons);
            setTimeout(() => {
                updateFloorButtonsForgoal(selectedBuildingForGoal);
                showButtonContainer(goalFloorButtons);
            }, 500);
        });
    }

    addGoalBuildingButtonListener(goalBuildingButtons, '1');
    addGoalBuildingButtonListener(goalBuilding2Button, '2');
    addGoalBuildingButtonListener(goalBuilding3Button, '3');
    addGoalBuildingButtonListener(goalBuilding4Button, '4');
    addGoalBuildingButtonListener(goalBuilding5Button, '5');
    addGoalBuildingButtonListener(goalBuilding6Button, '6');
    addGoalBuildingButtonListener(goalBuilding7Button, '7');
    addGoalBuildingButtonListener(goalBuilding8Button, '8');
    addGoalBuildingButtonListener(goalBuilding9Button, '9');
    addGoalBuildingButtonListener(goalBuilding10Button, '10');
    addGoalBuildingButtonListener(goalBuilding11Button, '11');
    addGoalBuildingButtonListener(goalBuilding12Button, '12');
    addGoalBuildingButtonListener(goalBuilding13Button, '13');
    addGoalBuildingButtonListener(goalBuilding14Button, '14');
    addGoalBuildingButtonListener(goalBuilding15Button, '15');
    addGoalBuildingButtonListener(goalBuilding16Button, '16');
    addGoalBuildingButtonListener(goalBuilding17Button, '17');
    addGoalBuildingButtonListener(goalBuilding18Button, '18');
    addGoalBuildingButtonListener(goalBuilding19Button, '19');
    addGoalBuildingButtonListener(goalBuilding20Button, '20');





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