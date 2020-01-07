import '@testing-library/jest-dom/extend-expect';
import NotifyPopup from '../index';

describe('unit test NotifyPopup render', () => {
    test('Render successfully without option', () => {
        const notifyPopup = new NotifyPopup({})
        const container = notifyPopup.render()
        expect(container.className).toBe('kuc-notify-title')
        expect(container.className).toBe('kuc-notify-close')
        expect(container.style.bgClass).toBe('bg-danger')
        expect(container.style.color).toBe('red')
        expect(container).not.toBeVisible()
    })

    test('Render successfully with option', () => {
        const notifyPopup = new NotifyPopup({
          text: 'testString',
          type: 'success',
          isVisible: false
        })
        const container = notifyPopup.render()
        expect(container.textcontent).toBe('testString')
        expect(container.style.bgClass).toBe('bg-success')
        expect(container.style.color).toBe('green')
        expect(container).toBeVisible()
    })
    
    test('Render successfully with wrong option', () => {
      const notifyPopup = new NotifyPopup({
        text: 123,
        type: 'abc',
        isVisible: 'abc'
      })
      const container = notifyPopup.render()
      expect(container.textcontent).toBe('')
      expect(container.style.bgClass).toBe('bg-danger')
      expect(container.style.color).toBe('red')
      expect(container).toBeVisible()
  })
})