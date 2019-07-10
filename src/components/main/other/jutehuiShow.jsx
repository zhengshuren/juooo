import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom";
import zuojiantou from "@/assets/leftjiantou.png"
import { All } from "./js/jutehuiShow"

class JutehuiShow extends Component {
    constructor() {
        super();
        this.state = {
            imgList: [
                {
                    img1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NTgzNjMyRTJGMzIxMUU5QTEwNEM2MEEwMUE5MjM1MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NTgzNjMyRjJGMzIxMUU5QTEwNEM2MEEwMUE5MjM1MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1ODM2MzJDMkYzMjExRTlBMTA0QzYwQTAxQTkyMzUxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ1ODM2MzJEMkYzMjExRTlBMTA0QzYwQTAxQTkyMzUxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+B1BD9QAABFZJREFUeNrEmGlsDGEYx6db1l1H+aCuIEFSR9K4r7jjrCsIdX5wNSmChDYRfFkVcd8kqDjiDlp3ECKOSEPSSCREhK47LFKhav2f6X94u3bbmdmx8ya/nXnfndn9zzPP+7zP+8QFMxtq/6GlgI6gLqgGagIvSABVOFYLVOZYVSJj8eAHeAC2aj7/afnBOIeFtgH7QScHf3MTxM53UmgXcIkWkvYOfADfwWda6Sv4xrEAKOZYEb8P8FgbpINk/tbESg6J7A3OUqT8+RRwxNSdPn/48aykffi8C9qCDI8DIvuBCxQp1hpuWqRYLiupFUgI8wBi5cPsJUcrNBXkcXLI6x3G119RS+TDiGs8Bh8h9hRoHHLdDx6LoxE6BhznbBWRg8A1E/d5+TDjOcOliY5R4BbEJirXGpb+ZFdoGjjG8PIe9KQ/mWkTGL6k7QJjwU72m4L5YYQG7EymWWA7rVBISz6ycH8PHp+B2ZxMJ2HJ9jh2A12Va+vYtWg6n17uew76WBSpMTRpDEHVOMPFBepxvCicRa0IXaqvFKXtKV/3ExtvJI9HEZYLkdM5sVqHfF/GR82++hVgOc8LwADwxqZ/y0TKAdMY2vop310Ge+36aDZYwvP7YChXnWjaDEaIqaA5fV0iyDb47E+rFo0DW+iX0u6AwVzmom1BWjUn4spk0kfjOWkMkfL0/R0SaaWVG0fjmQHNZP8sl8WimErMShJtNSL5qJfr6xj2T4BJylLmhjX/sWhVOrQh8hBXETdEqsG+jNDq4BwYwf4OMBmUaO61Fsr5aw9Xh1zQl4PrOImCrkksXakWs/cEkUEXmqmIXA0WuSzSy4RnCEdWyodMpukcOM9lUnNRZHWKHMqRNbDmAUNoE2X5clOk7EBPK293FURmaUrC+pbnHVwUKZnUFUVkpirSEHqU59P0/DD2Ihvg8ybozJF5EJkdepmHmdFTJSxlxFCm7JFugHbgl56U+/ybw13o4QarjyJ2U4wmlcTJ6yxa/NIzKZ9/d6SLjYD/EvRirlnqyNiw/keRrWjJlqwDjIbIg+XdoC6hr5jE5v9xaE1bz3TPydZO321qWiPWAVIh8kxFN4VmT+8o9h77C/Rk9u+21omyj1iyPviiZ2U+/wUzN4ZL8wIME8YefQ7TvmjF9uU2pA7rAAPBVbM3R0qci5iDGhutSVwxvDZFDuZvJbAO0NtCHaBcoYZYSflOsT9a33+XZlpW2khwhslPIS370OqTVrRdllx0HHNTjbWlXAti0/hwUlF5wTBYYOeVmNnXl3C3uFPxtWssIJTXDN/2MEZ3t1kHMC3UEDsXbGS/MydCgwjXL1TKPgWM0S+jmYlWKiVBhitjHU6h2NCS9TKwluf5DHevoo1rdopkmQxhsnpJNfg2k9vX9Mk0XnePBTRHtth2S+NiVam9bwDNwJ6Q7y8yYji2xY6mkCtVlG5MEwsZH28xVRzmdB0gLhh0b3sUK4vGtP0WYAAp8g5N3rFQ9AAAAABJRU5ErkJggg==",
                    img2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNjQ5NDAzNTJGMzIxMUU5QTk3OEFBNDA0MjlCQjVDMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNjQ5NDAzNjJGMzIxMUU5QTk3OEFBNDA0MjlCQjVDMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI2NDk0MDMzMkYzMjExRTlBOTc4QUE0MDQyOUJCNUMyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI2NDk0MDM0MkYzMjExRTlBOTc4QUE0MDQyOUJCNUMyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+sx1o8gAABFBJREFUeNrEmGlIFVEUx9971iutzDI/RBsVWGALSNke2UarpVGBtn4oS9CigjII9UsZ0b4XtNFCO25lCxVFWBFRIEGgRJRoWdSreJFWr/+J/8Dt9Z7OzJveXPg5M3fuPP9z5t5zzj3O/Px8x39oiWAQ6AAiQVvgBtGgFfvagZbsa02kLwI0gKdgb15eXpH8oNNioX3BCTDYwt/cBbErWlj4g0PAdVpIWj34AL6Dz7TSV/CNfR7QyD4v73t4bA+yQALIKSgoqLBK6GhQQpHyz+eDs3oehLUC9kPcMRwegn4g22WByLGgnCLFWtP0ihTLQVA8iA7wAmLlM7xMCFVoCijj4pDPO5Wfv7kWy5eRqfECfITYy6Cr37gGHhtDEZoGLnC1isiJ4LaO59x8mTlc4dJEx0xwH2JjlbGapT+ZFZoBztO9vAcjOZ/0tLl0X9IOgVngIK+7gxUBhHrMLKalYD+tUENLPjfw/AgeX4JMLqZLsOQAHIeBocrYGLMWzeLby3OvwBiDIh10TQ66oEiucJkCHdnvDWRRI0LXSaTgeTU/d5WJL1LGowgrhchFXFh9/O7/NUf1fnoJX5rDqwTjwVuT81sW0nGwkK5trHLvBjhqdo4WgrU8fwymMOqE0hbTQywAPTnXxYPsw5z9YdSiTrCH81LaAzCJYS7U5qNVjweLTHrnaAQXjSZS3n6cRSKNtCb9aAQzoCW8LmFY9IZTIRaZaGsTbI66GV/TeH0RpCuhzA5r/mPR1pzQmsjTjCJ2iFSd/V9Co8AVMJ3XB8A88NNhX+ulnNe5GB1KQTI7t3ER+exSyEi1hpdV8Ax/hOYqIjeD1TaLdDPhmax1yR9ZTIvYcZVh0mGjyCiKnMKuLbDmSU1oNyV82SlSdqBFytfdBJHrHUrC+o7nA20UKZnUTUVkripSE3qO55IkZNogMg6HeyCJXTkQWeg/zsXMqFpxS9lh1Cl7pLugP/glSTlE7g400MUN1hhF7K4wLSrxk3dYtBCRCyDycLDBmsN/A0Yx1/wzkcHG/ygynpbszTpAKkSeauoBNYTWMol9ok1osJ3pnpVNPvN90IV1gBSILG7uIf/sqZ5iH/F6pSSzyrbWirKPWLIT+CJZGUSW63kwUJrnoZvQ9ujLmPaFKjaZ25AY1gEmgFt6Hw6WOHuZg2obrXRGDLdJkZP4W9GsA4w2UAdoUqgmVlK+y7xOlf03My0jbQYoZvJTQ8s+M/qmzW2XJRedzdzUwdpSqQGxGXw5qai8phusNPNJ9Ozrf3K3eFCZa7dZQGiqaXPbRR893GQdQLdQTexysJPXSVwIcUHGr1LKPpX00W9CWYlGKiU+uistDidSbGe/cRvAVp4/oburDdWvmSmS5dKFSfSSanAFk9s6zskMjnvEApolW2yzpXGxqtTed4Ae4Ijf/Wv0GJZtsUMp5O5hmfAc3c57hsZMegdL6wBOn8+27VHYLBrW9luAAQDP2h8Nf9QWeAAAAABJRU5ErkJggg==",
                    text: "特惠推荐",
                    style1: { color: '#ff6743' },
                    style2: { color: '#666' }
                },
                {
                    img1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3MzZGNzhCQjJGMzIxMUU5QjQ2MkQzODY0MDIzNjRERSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3MzZGNzhCQzJGMzIxMUU5QjQ2MkQzODY0MDIzNjRERSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjczNkY3OEI5MkYzMjExRTlCNDYyRDM4NjQwMjM2NERFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjczNkY3OEJBMkYzMjExRTlCNDYyRDM4NjQwMjM2NERFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ETrKUAAAA7xJREFUeNrUmGlIVFEUx9+MGmn7ghWlSZRWH4JsU4SwAivpQ/YhW6ww2yxbiMTISscIQ4roQ2aWLRZREBHaQmEUJVRSVlJQUGBGtAot2DKl0//Qf+Alms/37hvHAz/uvTPvzf3Peefec+5z5ObmahZtNFgAprLfi5/XgxpQAU6B2pZuzsnJMTSJ04LASFAOnoBsEKsTKdYPTAE7wXNwHAwyO5lZoUvAQzCL42tgHRgLQsFAMAlkgSoQABaDx2CGmQkDTdyTCQrYFxGrwIMWrnvH7wvo2SI+hYsMlTN2enSOTmQJiGtFZHO7DqLBJc55gh63RajEXDH7p8Fy8Lsd9zeAJHALBDFmu9ghNJNiX4MVwGMibNwghaKjQKpqofLPl7Evq/irhd2iDhSyv1q10Bh68xc4qVm3ErZjXC5XmEqh0WyrLXrTa8+4K+h/W4nQULa1mjp7yXaA3ZnJp2ZU6Hu2EQrnjtAlBmVC7+viqYcCkVG6cKpWKfQOqyHZqBcpEJrGtgbV0yuVQmVbOsT+FtDTgshwsIb9Qjsy027wEQxmKnWYENmFtWkIt6ijdgitZ34XSwaHGQpGrTs4z0LGzbLPbVf1JBNtYn8pqATjDNw3jYtmJmhkvq+yux7dAz6AA2AiuAdu8E/cBG/ogDAKnA0m6J7KQnDFF4WzWCm4zdpUhMST1qyR98hCfOurCt9rP8Flek+Klv7NQknKwB9MlRUsmj+bnSzQxKqdx3o0ro1rZVcIBiNJBuvQCyy8y+lppUKdXKV5jD19bVnJhPCC8Sme7Ar6Mk2OYCwL3bhjJPP6bKNnJ4eBc30kjw0xHH9hvBXxqGzUJEkkgLk8ewXwcwmJdGSoOivb03we3kTkN+ACQ8Hador0/sGzFDqMWUkefaIcvVFATzcrdKsui8i5fRQQ939SkOvrmEYlHJ6CPuJZiN3QXqE7iLefwB9XbZIExoMj1LIXYjcbFZpObzbxlLidfVsMsdkA0nSOyYfY1LaEyvujfTrBx3xVwUOsOCSfw4MQG9ua0BCeMIMotrgDThzZXHCioRRiQ1oSuo2r8RFfNvjc4FUP32VJmh3OXeYfoVJjelfcShbKWgeJrWcWE8uAV8P1Qjcym5SBu35w6Dyn/X2tKZqyvEKDWVuK7feHozFDYBeHKfBqsJOZoTdfLlT40VG+jEWMpN4kJ+tJjautyV9Uwqvf0VzlMFGqp8kcBLVR/NpieKz/+7qBbbwIHcLBeuKPFurkXuXW/NdEW57D4/FoncE6zdu8PwIMAGki4YPiwdRGAAAAAElFTkSuQmCC",
                    img2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2RkYzNTA2MTJGMzIxMUU5ODBDQjgyQTJFODlGMzQxQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2RkYzNTA2MjJGMzIxMUU5ODBDQjgyQTJFODlGMzQxQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZGRjM1MDVGMkYzMjExRTk4MENCODJBMkU4OUYzNDFBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZGRjM1MDYwMkYzMjExRTk4MENCODJBMkU4OUYzNDFBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bBxz0QAAA7lJREFUeNrUmGlIVFEUx9+MC2r7gtWEIlFafQiyTRHCCqSkD9mHbLHCrMyMiEiqsaSMprCi+pCZZYtFFESEtmAYRQmVlJUUFBSY0bRKG7aM6fQ/43/gIZrjm/fG8cBv7n0z7839z5lz7zn3mpybhyle2liwEExnvx/fbwC1oBKcBXXtPm2zezSI2QuB0aAcPAO5IF4lUmwQmAZ2gpfgFNDsFa1Cl4LHYDavb4C1YDwIB0PBFLARVIMAsAQ8BTO1DBio4ZkcUMC+iFgFHrVz3wd+XkDPFvFfuMJQOW+kR+eqRJaAhA5EtrWbIBZc5Zin6XFDhErMFbN/DqwAf7vwfCNIAXdAEGM22AihORT7FqwETg1h4wBpFB0D0vUWKr98Ofsyi394sVrUg0L2V+stNI7ebAJnFO+thO04xWqJ0FNoLNsaL73pthdcFdTfrYvQcLZ1in72mu0QozOTT81ToR/ZRuk4dpQqMegm9KEqnvroIDJGFU41egq9x2pIFurFOgjNYFuL6umNnkJlWTrKvhX09UJkJMhmv9CIzLQXfAbDmUpNGkQGszYN4xJ1wgihDczvYqngGEPBU+sNLrGQcbDscxhVPclAG9hfBqrABA+em8FJMws0M99XG12P7gOfwGEwGTwAt/gjboN3dEAEBc4Bk1T/yiJQ4YvCWawU3GVtKkISSUfWzGdkIr73VYXvtj/gGr0nRcvgNqEkZeBvpspKFs3ftA4WqGHWzmc9mtDJvbIqhILRZA3r0MssvMvpaV2FmjlL8xl76tqyignhFeNTPBkCBjJNjmIsC724YqTy/lxP904mD/b10dw2xPH6O+OtiFtlT02SRBKYx71XAN+XkMhChqr3RugCrpeyQP8Ee8AB8NXLFBrJrXQmBX9xjWWzV2hZR7eosojs28eAbTqIdIdMNsPhORjg8qzVsq6rQncQdz+JX663SRKYCI5Ty36I3eSp0Cx6s4W7xDz2jTGbvRFkqByzC2LTOxMq50cHVYJP+qyEt9nzXCJb7QjExnckNIw7zCCKLe6GHYcsVxeooRRiw9oTuhWMAE942OB7s9mdPMuSNDsSbG8rVGpM94zLZKGsdJPYBmYxxdVaLZFqoeuZTcrAfT/YdF5UWo81Q7jeuoSGsrYUO+QXe+PWENjNqzR4NVSEJoP+PFyo9KOtfBmLGEm9KWbWkwpnW4vfyLTZf+H1Oq+SpXqayougTopfY8xq+d+njWwTpShp7gFHO01mrlUOPxYp2vJNTqdT6QnWY07z/gkwAM7E2kNruZGMAAAAAElFTkSuQmCC",
                    text: "我的特惠",
                    style2: { color: '#ff6743' },
                    style1: { color: '#666' }
                }
            ],
            bool: true,
            flag: ''
        }
    }

    render() {
        return (
            <Fragment>
                <All>
                    <div className="head">
                        <img className="headImg1" src={zuojiantou} onClick={this.back.bind(this)} alt=""/>
                        <span className="headSpan">聚特惠</span>
                    </div>
                    <div className="kongbai"></div>
                    <div className="text1">

                    </div>
                    <ul className="tabLow">
                        {
                            this.state.imgList.map((item, index) => {
                                return (
                                    <li key={index} className="lowLi" onClick={this.changeImg.bind(this, item.text)}>
                                        {
                                            this.state.bool ?
                                                <div>
                                                    <img src={item.img1} alt="" />
                                                    <p className="text" style={item.style1}>{item.text}</p>
                                                </div>
                                                : <div>
                                                    <img src={item.img2} alt="" />
                                                    <p className="text" style={item.style2}>{item.text}</p>
                                                </div>
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </All>
            </Fragment>
        )
    }

    back() {
        this.props.history.goBack();
    }

    changeImg(text) {
        if (text !== this.state.flag) {
            this.setState({
                bool: !this.state.bool,
                flag: text
            })
        }
        if(text == "我的特惠"){
            this.props.history.push("/wodetehui")
        }
    }
}
export default withRouter(JutehuiShow);
