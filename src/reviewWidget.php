<?php
// с кодировкой возможны проблемы, поэтому если вдруг появятся каркозябры, попробуйте добавить следующую строчку кода
header('Content-Type: text/html; charset=utf-8');

// сторонняя страница сайта, с которой будем брать контент.
$content = file_get_contents('https://ekaterinburg.flamp.ru/firm/klinika_zdorovya_i_krasoty_iriny_pavlovojj-70000001022642939');

// определяем начало необходимого фрагмента кода, до которого мы удалим весь контент
$pos = strpos($content, '<div class="ugc-feed__row ugc-feed__row--margin-bt-x2 bp-only-desktop">');

// удаляем все до нужного фрагмента
$content = substr($content, $pos);

// находим конец необходимого фрагмента кода
$pos = strpos($content, 'label-key="LAYOUTS_UGC_FEED_NEXT_REVIEWS">');

// отрезаем нужное количество символов от конца фрагмента
$content = substr($content, 0, $pos);

echo $content;

