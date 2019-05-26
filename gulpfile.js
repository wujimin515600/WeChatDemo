const gulp = require('gulp')
const less = require('gulp-less')
const rename = require('gulp-rename')


// 执行less编译命令
gulp.task('compile', () => {
    return gulp
        .src(['./**/*.less', '!./node_modules/**','!./common-less/*.less'])
        .pipe(less())
        .pipe(rename((path) => {
            path.extname = '.wxss'
        }))
        .pipe(gulp.dest('./'))
})
// 监听app.less
gulp.task('autoApp', () => {
    gulp.watch('*.less').on('change', (event) => {
        compileLess(event.path, event.type)
    });
})
// 监听pages/**/下的less
gulp.task('autoPage', () => {
    gulp.watch('./pages/**/*.less').on('change', (event) => {
        compileLess(event.path, event.type)
    });
})
// 监听组件下的less
gulp.task('autoComponents', () => {
    gulp.watch('./components/**/**/*.less').on('change', (event) => {
        compileLess(event.path, event.type)
    });
})
gulp.task('default', ['autoApp', 'autoPage','compile','autoComponents'], () => {
    console.log('ok')
})

function compileLess(path, type) {
    // body...
    console.log('compileLess', path, type)
    let newArr = path.split('\\');
    newArr.splice(newArr.length - 1, 1);
    let filePath = newArr.join('\\') + '\\';
    if (type === 'changed') {
        return gulp
            .src(path)
            .pipe(less())
            .pipe(rename((path) => {
                path.extname = '.wxss'
            }))
            .pipe(gulp.dest(filePath))
    } else if (type === 'added') {
    	// 新增less文件时不监听，当有内容时监听changed状态

    } else if (type === 'deleted') {
    	
    }

}