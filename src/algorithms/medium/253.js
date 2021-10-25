// 253. Meeting Rooms II
// https://leetcode.com/problems/meeting-rooms-ii/

const minMeetingRooms = (intervals) => {
  let rooms = []
  intervals.sort((a, b) => a[0] - b[0])
  for (let i = 0; i < intervals.length; i++) {
    if (rooms.length === 0) {
      rooms.push(intervals[i])
    } else {
      const earliestRoom = getEarliestRoom()
      const currentInterval = intervals[i]
      if (currentInterval[0] >= earliestRoom[1]) {
        rooms[0] = currentInterval
      } else {
        rooms.push(currentInterval)
      }
    }
  }

  return rooms.length

  function getEarliestRoom() {
    rooms.sort((a, b) => a[1] - b[1])
    return rooms[0]
  }
}
