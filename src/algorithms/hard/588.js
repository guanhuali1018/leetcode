// 588. Design In-Memory File System
// https://leetcode.com/problems/design-in-memory-file-system/

var FileSystem = function () {
  this.struct = {}
}

/**
 * @param {string} path
 * @return {string[]}
 */
FileSystem.prototype.ls = function (path) {
  const DIR = path.split('/')
  let curr = this.struct,
    file = ''
  for (let i = 0; i < DIR.length; i++) {
    const dir = DIR[i]
    if (dir.length == 0) continue
    if (!curr[dir]) {
      return false
    }
    if (i == DIR.length - 1 && typeof curr[dir] === 'string') {
      file = dir
      break
    }
    curr = curr[dir]
  }
  if (typeof curr[file] === 'string') {
    return [file]
  }
  return Object.keys(curr).sort()
}

/**
 * @param {string} path
 * @return {void}
 */
FileSystem.prototype.mkdir = function (path) {
  const DIR = path.split('/')
  let curr = null
  for (let dir of DIR) {
    if (dir.length === 0) {
      curr = this.struct
    } else {
      if (!curr[dir]) {
        curr[dir] = {}
      }
      curr = curr[dir]
    }
  }
  return
}

/**
 * @param {string} filePath
 * @param {string} content
 * @return {void}
 */
FileSystem.prototype.addContentToFile = function (filePath, content) {
  const DIR = filePath.split('/')
  let curr = null
  for (let i = 0; i < DIR.length; i++) {
    const dir = DIR[i]
    if (dir.length === 0) {
      // 如果是第一个空字符串 用来初始化curr
      curr = this.struct
    } else if (i === DIR.length - 1) {
      //如果当前是最后一个dir,也是在这种情况下操作
      if (!curr[dir]) {
        // 该dir不存在:创建并赋值
        curr[dir] = content
      } else {
        curr[dir] = curr[dir] + content // 存在：append新的内容
      }
    } else {
      // 如果不是最后一个
      if (!curr[dir]) {
        curr[dir] = {}
      }
      curr = curr[dir]
    }
  }
  return true
}

/**
 * @param {string} filePath
 * @return {string}
 */
FileSystem.prototype.readContentFromFile = function (filePath) {
  const DIR = filePath.split('/')
  let curr = this.struct
  for (let i = 0; i < DIR.length; i++) {
    const dir = DIR[i]
    if (dir.length === 0) continue // split出的第一个结果为空字符串
    if (typeof curr[dir] === 'object') {
      curr = curr[dir]
    } else if (typeof (curr[dir] === 'string')) {
      return curr[dir]
    }
  }
  return false
}

/**
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.ls(path)
 * obj.mkdir(path)
 * obj.addContentToFile(filePath,content)
 * var param_4 = obj.readContentFromFile(filePath)
 */
