import { mount } from '@vitest/vite';
import App from '../src/App.vue';

test('renders correctly', async () => {
  const wrapper = await mount(App);

  expect(wrapper.find('h1').exists()).toBe(true);
  expect(wrapper.find('button').exists()).toBe(true);
  expect(wrapper.find('table').exists()).toBe(true);

  expect(wrapper.find('input').exists()).toBe(true);

  expect(wrapper.find('div').classes()).toContain('container');

  expect(wrapper.find('#nombre').exists()).toBe(true);
  expect(wrapper.find('#materia').exists()).toBe(true);
  expect(wrapper.find('#nota').exists()).toBe(true);

  await wrapper.find('button').trigger('click');

  const tableRows = wrapper.findAll('tbody tr');
  expect(tableRows.length).toBe(1);
  expect(tableRows[0].find('td:nth-child(1)').text()).toBe('Nuevo Alumno');

  expect(tableRows[0].find('td:nth-child(2)').text()).toBe('Nueva Materia');
});

